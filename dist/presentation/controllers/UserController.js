"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const HttpResponse_1 = require("../../presentation/http/HttpResponse.js");
class UserController {
    constructor(useCases) {
        this.useCases = useCases;
    }
    async create(req, res) {
        try {
            const { name, email, password, gender, birthDate, confirmPassword } = req.body;
            if (!this.useCases.createUserUseCase) {
                throw new Error('CreateUserUseCase is not defined');
            }
            const user = await this.useCases.createUserUseCase.execute({
                name,
                email,
                password,
                gender,
                birthDate,
                confirmPassword,
            });
            return HttpResponse_1.HttpResponse.created(res, user);
        }
        catch (error) {
            return HttpResponse_1.HttpResponse.error(res, error);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map