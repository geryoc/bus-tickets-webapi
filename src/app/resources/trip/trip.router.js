const { Router } = require("express");
const tripController = require("./trip.controller.js");
const tripValidator = require("./trip.validator.js");
const {
  validateBody,
  validateParams,
  validateQuery,
} = require("../../shared/middleware/validation-handler.middleware.js");

const tripRouter = Router();

tripRouter.get("/", tripController.getAll);
tripRouter.get(
  "/search",
  validateQuery(tripValidator.search),
  tripController.search
);
tripRouter.get(
  "/:id",
  validateParams(tripValidator.id),
  tripController.getById
);

tripRouter.post("/", validateBody(tripValidator.default), tripValidator.validateLocationDependencies, tripController.post);
tripRouter.put("/:id", validateBody(tripValidator.default), tripValidator.validateLocationDependencies, tripController.put);
tripRouter.delete(
  "/:id",
  validateParams(tripValidator.id),
  tripController.delete
);

module.exports = tripRouter;
