const joi = require("joi");

const tripValidator = {
  default: joi.object({
    originLocationId: joi.number().min(1).required(),
    destinationLocationId: joi.number().min(1).required(),
    date: joi.date().iso().required(),
    busNumber: joi.number().min(1).required(),
    maxSeats: joi.number().min(1).required(),
    basePrice: joi.number().min(0).precision(2).required(),
    travelDurationInMinutes: joi.number().min(0).optional(),
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
};

module.exports = tripValidator;
