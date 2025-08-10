import { User } from "../../../domain/entities/User";
import { IMongoRepository } from "../../../domain/repositories/IUserRepository";
import { BadRequestError, NotFoundError } from "../../../presentation/http/HttpError";
import { CreateAccessTokenUseCase } from "../create-access-token/CreateAccessTokenUseCase";
import { CreateRefreshTokenUseCase } from "../create-refresh-token/CreateRefreshTokenUseCase";
import { LoginDTO } from "./LoginDTO";
import { compare } from "bcrypt";

export class LoginUseCase {
    constructor(private userRepository: IMongoRepository<User>, private createAccessTokenUseCase: CreateAccessTokenUseCase, private createRefreshTokenUseCase: CreateRefreshTokenUseCase) { }

    async execute(data: LoginDTO): Promise<{ user: User, accessToken: string, refreshToken: string }> {

        if (!data.email || !data.password) {
            throw new BadRequestError('Email or password is missing');
        }

        const user = await this.userRepository.findOne({ email: data.email });

        const isPasswordValid = await compare(data.password, user?.password || '');

        if (!user || !isPasswordValid) {
            throw new NotFoundError('User not found.', 'Verify if the email or password are correct');
        }

        const accessToken = await this.createAccessTokenUseCase.execute(user);
        const refreshToken = await this.createRefreshTokenUseCase.execute(user);

        return { user, accessToken, refreshToken };
    }
}