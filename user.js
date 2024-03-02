exports.userinfo = (req, res) => {
    // res.send({err:'', user: {name:'', uid: 1}}) 
    res.sendFile('./test.html', {root: __dirname})
}

