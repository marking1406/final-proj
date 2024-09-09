const { Router } = require('express');
const FurnitureController = require('../controller/furniture');

const furnitureRouter = new Router();

furnitureRouter.get('/',FurnitureController.getFurniture)

module.exports = furnitureRouter