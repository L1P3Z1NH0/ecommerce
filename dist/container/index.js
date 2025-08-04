import { MongoDbUserRepository } from '../infrastructure/database/mongoDb/mongoDbUserRepository.js';
import { CreateUserUseCase } from '../use-cases/create-user/CreateUserUseCase.js';
import { UserController } from '../presentation/controllers/UserController.js';
export const container = {
    repositories: {
        userRepository: new MongoDbUserRepository(),
    },
    useCases: {
        createUserUseCase: new CreateUserUseCase(new MongoDbUserRepository()),
    },
    controllers: {
        userController: new UserController({
            createUserUseCase: new CreateUserUseCase(new MongoDbUserRepository())
        }),
    },
};
//# sourceMappingURL=index.js.map