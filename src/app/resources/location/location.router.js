const { Router } = require('express');
const locationController = require('./location.controller.js');
const locationValidator = require('./location.validator.js');
const { validateBody, validateParams, validateQuery } = require('../../shared/middleware/validation-handler.middleware.js');

const locationRouter = Router();

locationRouter.get("/", locationController.getAll);
locationRouter.get("/search", validateQuery(locationValidator.search), locationController.search);
locationRouter.get("/:id", validateParams(locationValidator.id), locationController.getById);

locationRouter.post("/", validateBody(locationValidator.default), locationController.post);
locationRouter.put("/", validateBody(locationValidator.default), locationController.put);
locationRouter.delete("/:id", validateParams(locationValidator.id), locationController.delete);

module.exports = locationRouter;
