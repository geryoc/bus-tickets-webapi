const joi = require('joi');

const locationValidator = {
    default: joi.object({
        name: joi.string().min(1).required(),
    }),
    id: joi.object({
        id: joi.number().min(1).required(),
    }),
    search: joi.object({
        name: joi.string().min(1).optional(),
        pageNumber: joi.number().min(1).optional(),
        pageSize: joi.number().min(1).optional(),
    }),
};

module.exports = locationValidator;
