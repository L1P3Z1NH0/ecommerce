import jwt from "jsonwebtoken";
import config from "../config/env";
import { Request, Response, NextFunction } from "express";
import { ForbiddenError, UnauthorizedError } from "../presentation/http/HttpError";

interface JwtPayload {
    id: string;
    email: string;
}

export function authenticateToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers["authorization"];
    const [, token] = (authHeader || "").split(" ");

    if (!token) {
        throw new UnauthorizedError('Token not provided')
    }

    jwt.verify(token, config.accessTokenSecret, (err, decoded) => {
        if (err) {
            throw new ForbiddenError('Invalid or expired token')
        }

        (req as any).user = decoded as JwtPayload;
        next();
    });
}
