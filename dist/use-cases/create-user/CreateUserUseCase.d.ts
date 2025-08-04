import type { User } from '../../domain/entities/User.js';
import type { IUserRepository } from '../../domain/repositories/IUserRepository.js';
import type { CreateUserDTO } from '../../use-cases/create-user/CreateUserDTO.js';
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(data: CreateUserDTO): Promise<User>;
}
//# sourceMappingURL=CreateUserUseCase.d.ts.map