const { Router } = require('express');
const RealEstateController = require('../controller/realEstate');

const realEstateRouter = new Router();

realEstateRouter.get('/',RealEstateController.getRealEstate)

module.exports = realEstateRouter;