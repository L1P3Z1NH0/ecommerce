import jwt from "jsonwebtoken";
import config from "../../../config/env";
import { User } from "../../../domain/entities/User";
import { BadRequestError, UnauthorizedError } from "../../../presentation/http/HttpError";
import { CreateAccessTokenUseCase } from "../create-access-token/CreateAccessTokenUseCase";

export class RefreshUseCase {
    constructor(private createAccessTokenUseCase: CreateAccessTokenUseCase) { }

    async execute(user:User,refreshToken: string): Promise<{ accessToken: string }> {
        
        if(!refreshToken) {
            throw new BadRequestError('Refresh token is missing');
        }

        jwt.verify(refreshToken, config.refreshTokenSecret, (err) => {
            if (err) throw new UnauthorizedError('Refresh token is expired or invalid'); 
        })

        const accessToken = await this.createAccessTokenUseCase.execute(user);

        return { accessToken };
    }
}