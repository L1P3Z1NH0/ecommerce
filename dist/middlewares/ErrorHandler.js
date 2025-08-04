"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    if (err.isOperational) {
        res.status(err.statusCode).json({ error: err.message });
    }
    else {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//# sourceMappingURL=ErrorHandler.js.map