const createPaginationResponse = (pageNumber, limit, totalItems) => {
    return {
        pageNumber: pageNumber,
        pageSize: limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
    };
}

const createErrorResponse = (errorMessage) => {
    return { error: errorMessage };
}

module.exports = {
    createPaginationResponse,
    createErrorResponse,
};
