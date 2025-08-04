import type { Response } from "express";
import { HttpError } from "./HttpError";

export class HttpResponse {
    static ok<T>(res: Response, data: T) {
        return res.status(200).json(data);
    }

    static created<T>(res: Response, data: T) {
        return res.status(201).json(data);
    }

    static error(res: Response, error: HttpError) {
        return res.status(error.statusCode).json({ message: error.message, tip: error.tip });
    }
}
