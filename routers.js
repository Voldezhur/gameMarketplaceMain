const RouterClass = require('express').Router

const users = require('./user')

const router = new RouterClass()
router.get('/', users.userinfo)

module.exports.router = router