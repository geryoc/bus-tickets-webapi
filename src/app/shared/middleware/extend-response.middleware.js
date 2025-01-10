const { createErrorResponse } = require("../helpers/api-response.helper");

function extendResponseMethods(req, res, next) {

    res.sendBadRequestError = function (message) {
        return this.status(400).json(createErrorResponse(message));
    };
    res.sendInternalServerError = function (message = "An unexpected error occurred.") {
        return this.status(500).json(createErrorResponse(message));
    };

    next();
}

module.exports = extendResponseMethods;