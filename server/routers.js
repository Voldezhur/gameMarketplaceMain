const RouterClass = require('express').Router

const mainRoutes = require('./main')

const router = new RouterClass()
router.get('/', mainRoutes.reactTest)
router.get('/home', mainRoutes.home)
router.get('/test', mainRoutes.testhtml)
router.get('/testJson', mainRoutes.userinfo)

module.exports.router = router