const validateBody = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        const formattedMessage = error.details[0].message.replace(/"/g, "'");
        return res.sendBadRequestError(formattedMessage);
    }
    next();
};

const validateQuery = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error) {
        const formattedMessage = error.details[0].message.replace(/"/g, "'");
        return res.sendBadRequestError(formattedMessage);
    }
    next();
};

const validateParams = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.params);
    if (error) {
        const formattedMessage = error.details[0].message.replace(/"/g, "'");
        return res.sendBadRequestError(formattedMessage);
    }
    next();
};

module.exports = {
    validateBody,
    validateQuery,
    validateParams,
};
