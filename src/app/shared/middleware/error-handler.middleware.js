module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.sendInternalServerError(err.message || "An unexpected error occurred.");
};