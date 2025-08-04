import type { NextFunction, Request, Response } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err.isOperational) {
        res.status(err.statusCode).json({ error: err.message });
    } else {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}