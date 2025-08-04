import { Collection, ObjectId } from 'mongodb';
import { User } from '../../../../domain/entities/User';
import { getDb } from './mongoDbClient.js';
export class MongoDbUserRepository {
    getCollection() {
        return getDb().collection('users');
    }
    async create(user) {
        const now = new Date();
        const userData = {
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt: user.createdAt || now,
            updatedAt: user.updatedAt || now,
        };
        const result = await this.getCollection().insertOne({
            ...userData,
            _id: new ObjectId() // Generate a new ObjectId
        });
        return new User({
            name: userData.name,
            email: userData.email,
            password: userData.password,
        }, result.insertedId.toString());
    }
    async findByEmail(email) {
        const user = await this.getCollection().findOne({ email });
        return user ? this.mapToUser(user) : null;
    }
    async findById(id) {
        if (!ObjectId.isValid(id))
            return null;
        const user = await this.getCollection().findOne({ _id: new ObjectId(id) });
        return user ? this.mapToUser(user) : null;
    }
    async update(user) {
        if (!user.id)
            throw new Error('User ID is required for update');
        const updateData = {
            name: user.name,
            email: user.email,
            password: user.password,
            updatedAt: new Date(),
        };
        await this.getCollection().updateOne({ _id: new ObjectId(user.id) }, { $set: updateData });
        return user;
    }
    async delete(id) {
        if (!ObjectId.isValid(id))
            return false;
        const result = await this.getCollection().deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    }
    mapToUser(data) {
        return new User({
            name: data.name,
            email: data.email,
            password: data.password,
        }, data._id.toString());
    }
}
//# sourceMappingURL=mongoDbRepository.js.map