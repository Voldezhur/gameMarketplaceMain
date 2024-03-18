const RouterClass = require('express').Router

const mainRoutes = require('./oldRoutes.js')
const userController = require("./queries.js")

const router = new RouterClass()
router.get('/', mainRoutes.reactTest)
router.get('/home', mainRoutes.home)
router.get('/test', mainRoutes.testhtml)
router.get('/testJson', mainRoutes.userinfo)

router.get('/usersTest', userController.getAllUsers)
router.get('/gamesList', userController.getAllGames)

module.exports.router = router