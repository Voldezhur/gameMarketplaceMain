exports.userinfo = (req, res) => {
    res.send({err:'', user: {name:'', uid: 1}}) 
}

exports.testhtml = (req, res) => {
    res.sendFile('./test.html', {root: __dirname})    
}

exports.home = (req, res) => {
    res.sendFile('./home.html', {root: __dirname})
}

exports.reactTest = (req, res) => {
    res.send("Hello, world!");
}