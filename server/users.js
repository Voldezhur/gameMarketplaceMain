const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
  try {
    const r = await req.db.pool.query("SELECT * FROM users ORDER BY uid ASC")
    res.json({err: '', users: r.rows});
  } catch(e) {
    res.status(500).json({err: e.message, users: []});
  }
}

exports.getUserById = async (req, res) => {
    if (!req.uid) {
      res.status(401).json({ err: 'Авторизуйтесь', user: null });
      return
    }
    
    try {
      const r = await req.db.pool.query("SELECT * FROM users WHERE uid = $1", [req.uid])
      if (r.rows?.length) {
        res.json({err: '', user: r.rows[0]});
        return;
      }
      res.status(404).json({ err: 'Не найден', user: null });
    } catch(e) {
      res.status(500).json({err: e.message, users: []});
    }
}

exports.login = async (req, res) => {
  if (!req.body.name?.length || !req.body.password?.length) {
    res.status(400).send('No founded name or password on post request');
    return;
  }

  let user = { uid: 0, name: '', email: '', token: '' }

  if (req.token) {
    res.send({err: 'User already logined', user});
    return;
  }

  try {
    const r = await req.db.pool.query(`SELECT uid, name, email FROM users where trim(name) = '${ req.body.name.trim() }' and trim(password) = '${ req.body.password.trim() }'`)
    if (!r.rows?.length) {
      res.status(204).send({ err: 'User not founded', user })
      return
    }
    const iat = (new Date().getTime() + 15 * 60 * 60 * 1000)/1000 // время жизни токена 15 часов 
    user = { ...r.rows[0] }
    user.token = jwt.sign({ ...user, iat }, process.env.JWT_SIGN);

    res.json({ err: '', user });
  } catch(e) {
    res.status(500).json({ err: e.message, user });
  }
}

exports.logout = async (req, res) => {
  try {
    res.json({ err: '' });
  } catch(e) {
    res.json({err: e.message});
  }
}

exports.checkAuth = async (req, res, next) => {  
  if (req.token?.length) {    
    try {
      const user = jwt.decode(req.token, process.env.JWT_SIGN)
      if (user.iat > (new Date().getTime() / 1000)) {
        req.uid = user.uid
        next()
        return
      }

      res.status(401).send('Token expired')    
      return      
    } catch (e) {
      // other error process on token verify
    }              
  }
  
  res.status(401).send('Access denied')
  return
  
}