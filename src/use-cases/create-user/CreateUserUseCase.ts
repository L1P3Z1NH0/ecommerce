import { hash } from 'bcrypt';

import type { User } from '../../domain/entities/User';
import type { IMongoRepository } from '../../domain/repositories/IUserRepository';
import type { CreateUserDTO } from '../../use-cases/create-user/CreateUserDTO';
import { BadRequestError, ConflictError } from '../../presentation/http/HttpError';

export class CreateUserUseCase {
  constructor(private userRepository: IMongoRepository<User>) { }

  async execute(data: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findOne({ email: data.email });

    if (userAlreadyExists) {
      throw new ConflictError(`User with email ${data.email} already exists`, 'Try to login, or use another email');
    }

    if (data?.password !== data?.confirmPassword) {
      throw new BadRequestError('Passwords do not match', '');
    }

    const hashedPassword = await hash(data.password, 8);

    return this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
