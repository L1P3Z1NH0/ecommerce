"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UserController_1 = require("../../presentation/controllers/UserController.js");
const CreateUserUseCase_1 = require("../../use-cases/create-user/CreateUserUseCase.js");
const mongoDbUserRepository_1 = require("../../infrastructure/database/mongoDb/mongoDbUserRepository.js");
exports.userRoutes = (0, express_1.Router)();
const userRepository = new mongoDbUserRepository_1.MongoDbUserRepository();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepository);
const userController = new UserController_1.UserController({ createUserUseCase });
exports.userRoutes.post('/users', (req, res) => userController.create(req, res));
exports.default = exports.userRoutes;
//# sourceMappingURL=UserRoutes.js.map