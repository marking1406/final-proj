const { Router } = require('express');
const VehiclesController = require('../controller/vehicles');

const vehiclesRouter = new Router();

vehiclesRouter.get('/',VehiclesController.getVehicle)

module.exports = vehiclesRouter;