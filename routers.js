const RouterClass = require('express').Router

const users = require('./main')

const router = new RouterClass()
router.get('/', users.userinfo)
router.get('/test', users.testhtml)
router.get('/home', users.home)

module.exports.router = router