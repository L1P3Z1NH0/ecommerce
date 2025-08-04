import { User, type UserProps } from '../../domain/entities/User.js';
export interface IUserRepository {
    create(user: UserProps): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    update(user: UserProps): Promise<User>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=IUserRepository.d.ts.map