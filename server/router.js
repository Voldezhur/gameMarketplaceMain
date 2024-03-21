const RouterClass = require('express').Router;

// const mainRoutes = require('./oldRoutes.js')
const { checkAuth } = require('./users');
const Catalog = require("./catalog.js");
const Users = require("./users.js");
const mainRouter = new RouterClass();

// Users
mainRouter.get('/user/list', Users.getAllUsers);
mainRouter.post('/user/login', Users.login);
mainRouter.get('/user/logout', Users.logout);
mainRouter.get('/user/info', checkAuth, Users.getUserById);

// Catalog
mainRouter.get('/games-list', Catalog.getAllGames);


module.exports.mainRouter = mainRouter