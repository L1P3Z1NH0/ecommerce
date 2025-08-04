import { MongoDbUserRepository } from '../infrastructure/database/mongoDb/mongoDbUserRepository.js';
import { CreateUserUseCase } from '../use-cases/create-user/CreateUserUseCase.js';
import { UserController } from '../presentation/controllers/UserController.js';
export declare const container: {
    repositories: {
        userRepository: MongoDbUserRepository;
    };
    useCases: {
        createUserUseCase: CreateUserUseCase;
    };
    controllers: {
        userController: UserController;
    };
};
//# sourceMappingURL=index.d.ts.map