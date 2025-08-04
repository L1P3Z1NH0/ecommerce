"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.ConflictError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.HttpError = void 0;
class HttpError extends Error {
    constructor(message, statusCode = 500, tip) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.HttpError = HttpError;
class BadRequestError extends HttpError {
    constructor(message = "Bad Request", tip = "") {
        super(message, 400, tip);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends HttpError {
    constructor(message = "Unauthorized", tip = "") {
        super(message, 401, tip);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends HttpError {
    constructor(message = "Forbidden", tip = "") {
        super(message, 403, tip);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends HttpError {
    constructor(message = "Not Found", tip = "") {
        super(message, 404, tip);
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends HttpError {
    constructor(message = "Conflict", tip = "") {
        super(message, 409, tip);
    }
}
exports.ConflictError = ConflictError;
class InternalServerError extends HttpError {
    constructor(message = "Internal Server Error", tip = "") {
        super(message, 500, tip);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=HttpError.js.map