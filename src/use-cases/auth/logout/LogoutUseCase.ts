import { User } from "../../../domain/entities/User";

export class LogoutUseCase {
    constructor() { }

    async execute(user: User): Promise<User> {
        return user;
    }
}