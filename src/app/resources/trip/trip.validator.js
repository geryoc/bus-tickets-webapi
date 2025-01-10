const joi = require("joi");
const models = require("../../shared/models");

const tripValidator = {
  default: joi
    .object({
      originLocationId: joi.number().min(1).required(),
      destinationLocationId: joi.number().min(1).required(),
      date: joi.date().iso().required(),
      busNumber: joi.number().min(1).required(),
      maxSeats: joi.number().min(1).required(),
      basePrice: joi.number().min(0).precision(2).required(),
      travelDurationInMinutes: joi.number().min(0).optional(),
    })
    .custom((value, helpers) => {
      if (value.originLocationId === value.destinationLocationId) {
        return helpers.message(
          "originLocationId and destinationLocationId must be different."
        );
      }
      return value;
    }),

  id: joi.object({
    id: joi.number().min(1).required(),
  }),

  search: joi.object({
    originLocationId: joi.number().min(1).optional(),
    destinationLocationId: joi.number().min(1).optional(),
    date: joi.date().iso().optional(),
    busNumber: joi.number().min(1).optional(),
    pageNumber: joi.number().min(1).optional(),
    pageSize: joi.number().min(1).optional(),
  }),

  validateLocationDependencies: async (req, res, next) => {
    const { originLocationId, destinationLocationId } = req.body;
    try {
      const locations = await models.Location.findAll({
        where: {
          id: [originLocationId, destinationLocationId],
        },
      });

      if (locations.length < 2) {
        return res.sendBadRequestError("Invalid location ID dependencies. Please provide valid origin and destination Location IDs.");
      }

      next();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = tripValidator;
