"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const HttpError_1 = require("../../presentation/http/HttpError.js");
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new HttpError_1.ConflictError(`User with email ${data.email} already exists`, 'Try to login, or use another email');
        }
        if (data?.password !== data?.confirmPassword) {
            throw new HttpError_1.BadRequestError('Passwords do not match', '');
        }
        const hashedPassword = await (0, bcrypt_1.hash)(data.password, 8);
        return this.userRepository.create({
            ...data,
            password: hashedPassword,
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map