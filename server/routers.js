const RouterClass = require('express').Router

const mainRoutes = require('./main')

const router = new RouterClass()
router.get('/', mainRoutes.userinfo)
router.get('/test', mainRoutes.testhtml)
router.get('/home', mainRoutes.home)

module.exports.router = router