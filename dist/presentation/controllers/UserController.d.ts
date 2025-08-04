import type { Request, Response } from 'express';
import { CreateUserUseCase } from '../../use-cases/create-user/CreateUserUseCase.js';
import { HttpResponse } from '../../presentation/http/HttpResponse.js';
export declare class UserController {
    private useCases;
    constructor(useCases: {
        createUserUseCase?: CreateUserUseCase;
    });
    create(req: Request, res: Response): Promise<Response | HttpResponse>;
}
//# sourceMappingURL=UserController.d.ts.map