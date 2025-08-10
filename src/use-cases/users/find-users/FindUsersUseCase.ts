import { User } from "../../../domain/entities/User";
import { IMongoRepository } from "../../../domain/repositories/IUserRepository";
import { NotFoundError } from "../../../presentation/http/HttpError";

export class FindUsersUseCase {
    constructor(private userRepository: IMongoRepository<User>) { }

    async execute(query: Record<string, any>): Promise<User[]> {
        const users = await this.userRepository.find(query);

        if (!users) {
            throw new NotFoundError(`Users not found`, 'Verify if any user exists');
        }

        return users;
    }
}