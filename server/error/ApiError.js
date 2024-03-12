const {HTTP_STATUS} = require("../constants/apiConstants");

class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    toJSON() {
        return {
            status: this.status,
            message: this.message,
        };
    }

    static badRequest(message) {
        return new ApiError(HTTP_STATUS.NOT_FOUND, message)
    }

    static internal(message) {
        return new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, message)
    }

    static forbidden(message) {
        return new ApiError(HTTP_STATUS.FORBIDDEN, message)
    }
}

module.exports = ApiError