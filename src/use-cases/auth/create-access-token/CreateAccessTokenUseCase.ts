import jwt from "jsonwebtoken";
import config from "../../../config/env";
import { User } from "../../../domain/entities/User";

export class CreateAccessTokenUseCase {
    constructor() { }

    async execute(user: User): Promise<string> {
        return jwt.sign(user, config.accessTokenSecret, { expiresIn: config.accessTokenExpiration });
    }
}