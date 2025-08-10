import jwt from "jsonwebtoken";
import config from "../../../config/env";
import { User } from "../../../domain/entities/User";

export class CreateRefreshTokenUseCase {
    constructor() { }

    async execute(user: User): Promise<string> {
        return jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenExpiration });
    }
}
