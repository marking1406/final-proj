const { Router } = require('express');
const UsersController = require('../controller/users');

const usersRouter = new Router();

usersRouter.get('/',UsersController.getUsers)

module.exports = usersRouter