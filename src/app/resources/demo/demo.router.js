const { Router } = require('express');
const demoController = require('./demo.controller.js');
const demoValidator = require('./demo.validator.js');
const { validateBody, validateQuery } = require('../../shared/middleware/validation-handler.middleware.js');

const demoRouter = Router();

demoRouter.get("/", validateQuery(demoValidator.default), demoController.get);
demoRouter.post("/", validateBody(demoValidator.default), demoController.post);

module.exports = demoRouter;
