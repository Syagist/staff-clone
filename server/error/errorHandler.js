const ApiError = require("./ApiError");
const {HTTP_STATUS} = require("../constants/apiConstants");

function errorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        res.status(err.status).json(err.toJSON());
    } else {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            message: 'Internal Server Error',
        });
    }
}

module.exports = errorHandler;

