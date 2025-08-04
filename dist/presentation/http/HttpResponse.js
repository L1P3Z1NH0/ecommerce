"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
class HttpResponse {
    static ok(res, data) {
        return res.status(200).json(data);
    }
    static created(res, data) {
        return res.status(201).json(data);
    }
    static error(res, error) {
        return res.status(error.statusCode).json({ message: error.message, tip: error.tip });
    }
}
exports.HttpResponse = HttpResponse;
//# sourceMappingURL=HttpResponse.js.map