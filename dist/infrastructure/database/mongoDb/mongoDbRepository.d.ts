import type { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { User } from '../../../../domain/entities/User';
export declare class MongoDbUserRepository implements IUserRepository {
    private getCollection;
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<boolean>;
    private mapToUser;
}
//# sourceMappingURL=mongoDbRepository.d.ts.map