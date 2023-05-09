const {Router} = require('express')
const {getDietsHandler} = require('../handlers/dietsHandlers')

const dietsRoutes = Router();

dietsRoutes.get("/", getDietsHandler);

module.exports = dietsRoutes;
