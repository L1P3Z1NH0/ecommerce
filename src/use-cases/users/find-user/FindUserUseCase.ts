import { User } from "../../../domain/entities/User";
import { IMongoRepository } from "../../../domain/repositories/IUserRepository";
import { NotFoundError } from "../../../presentation/http/HttpError";

export class FindUserUseCase {
    constructor(private userRepository: IMongoRepository<User>) { }

    async execute(email: string): Promise<User> {
        const user = await this.userRepository.findOne({ email });

        if (!user) {
            throw new NotFoundError(`User not found with email ${email}`, 'Verify if the email is correct');
        }

        return user;
    }
}