export class HttpError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly tip?: string;

    constructor(message: string, statusCode = 500, tip?: string) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export class BadRequestError extends HttpError {
    constructor(message = "Bad Request", tip = "") {
        super(message, 400, tip);
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message = "Unauthorized", tip = "") {
        super(message, 401, tip);
    }
}

export class ForbiddenError extends HttpError {
    constructor(message = "Forbidden", tip = "") {
        super(message, 403, tip);
    }
}

export class NotFoundError extends HttpError {
    constructor(message = "Not Found", tip = "") {
        super(message, 404, tip);
    }
}

export class ConflictError extends HttpError {
    constructor(message = "Conflict", tip = "") {
        super(message, 409, tip);
    }
}

export class InternalServerError extends HttpError {
    constructor(message = "Internal Server Error", tip = "") {
        super(message, 500, tip);
    }
}
