import { Router } from 'express';
import { UserController } from '../../presentation/controllers/UserController';
import { CreateUserUseCase } from '../../use-cases/users/create-user/CreateUserUseCase';
import { MongoDbUserRepository } from '../../infrastructure/database/mongoDb/mongoDbUserRepository';
import { FindUserUseCase } from '../../use-cases/users/find-user/FindUserUseCase';
import { FindUsersUseCase } from '../../use-cases/users/find-users/FindUsersUseCase';

export const userRoutes = Router();

const userRepository = new MongoDbUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const findUserUseCase = new FindUserUseCase(userRepository)
const findUsersUseCase = new FindUsersUseCase(userRepository)
const userController = new UserController({ createUserUseCase, findUserUseCase, findUsersUseCase });

userRoutes.post('/users', (req, res) => userController.create(req, res));
userRoutes.get('/users/:email', (req, res) => userController.findOne(req, res));
userRoutes.get('/users', (req, res) => userController.find(req, res));

export default userRoutes;
