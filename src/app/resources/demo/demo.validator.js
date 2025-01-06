const joi = require('joi');

const demoValidator = {
    default: joi.object({
        search: joi.string().min(3).required(),
    }),
};

module.exports = demoValidator;
