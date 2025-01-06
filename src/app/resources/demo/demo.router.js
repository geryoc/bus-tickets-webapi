const { Router } = require('express');
const demoController = require('./demo.controller.js');
const demoValidator = require('./demo.validator.js');
const { validateBody, validateQuery: validateParams } = require('../../shared/middleware/validationHandler.js');

const demoRouter = Router();

demoRouter.get("/", validateParams(demoValidator.default), demoController.get);
demoRouter.post("/", validateBody(demoValidator.default), demoController.post);

module.exports = demoRouter;
