const RouterClass = require('express').Router

const mainRoutes = require('./oldRoutes.js')
const queries = require("./databaseQueries.js")

const mainRouter = new RouterClass()
mainRouter.get('/usersList', queries.getAllUsers)
mainRouter.get('/gamesList', queries.getAllGames)

module.exports.mainRouter = mainRouter