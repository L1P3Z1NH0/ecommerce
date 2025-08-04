import type { Request, Response } from 'express';

import { CreateUserUseCase } from '../../use-cases/create-user/CreateUserUseCase';
import { FindUserUseCase } from '../../use-cases/find-user/FindUserUseCase';
import { HttpResponse } from '../../presentation/http/HttpResponse';
import { FindUsersUseCase } from '../../use-cases/find-users/FindUsersUseCase';

export class UserController {
  constructor(private useCases: { createUserUseCase: CreateUserUseCase, findUserUseCase: FindUserUseCase, findUsersUseCase: FindUsersUseCase }) { }

  async create(req: Request, res: Response): Promise<Response | HttpResponse> {
    try {
      const { name, email, password, gender, birthDate, confirmPassword } = req.body;

      const user = await this.useCases.createUserUseCase.execute({
        name,
        email,
        password,
        gender,
        birthDate,
        confirmPassword,
      });

      return HttpResponse.created(res, user);
    } catch (error: any) {
      return HttpResponse.error(res, error);
    }
  }

  async findOne(req: Request, res: Response): Promise<Response | HttpResponse> {
    try {
      const { email } = req.params;

      const user = await this.useCases.findUserUseCase.execute(String(email));

      return HttpResponse.ok(res, user);
    } catch (error: any) {
      return HttpResponse.error(res, error);
    }
  }

  async find(req: Request, res: Response): Promise<Response | HttpResponse> {
    try {
      const users = await this.useCases.findUsersUseCase.execute(req.query);

      return HttpResponse.ok(res, users);
    } catch (error: any) {
      return HttpResponse.error(res, error);
    }
  }
}
