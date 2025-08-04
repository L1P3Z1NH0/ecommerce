
import UserModel from '../../../domain/models/UserModel';
import { ObjectId } from 'mongodb';
import { IMongoRepository } from '../../../domain/repositories/IUserRepository';
import { IUser, User } from '../../../domain/entities/User';

export class MongoDbUserRepository implements IMongoRepository<User> {

  async create(user: User): Promise<User> {
    const now = new Date();
    const userData: Omit<IUser, '_id'> = {
      name: user.name,
      email: user.email,
      password: user.password,
      gender: user.gender,
      birthDate: user.birthDate,
      createdAt: user.createdAt || now,
      updatedAt: user.updatedAt || now,
    };

    const result = await UserModel.create(userData);

    return new User(
      {
        _id: result._id,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        gender: userData.gender,
        birthDate: userData.birthDate,
      }
    );
  }

  async findOne(query: Record<string, any>): Promise<User | null> {
    const user = await UserModel.findOne(query);
    return user
  }

  async find(query: Record<string, any>): Promise<User[] | null> {
    const users = await UserModel.find(query);
    return users
  }

  async findById(id: string): Promise<User | null> {
    if (!ObjectId.isValid(id)) return null;
    const user = await UserModel.findOne({ _id: new ObjectId(id) });
    return user
  }

  async update(user: User): Promise<User> {
    if (!user._id) throw new Error('User ID is required for update');

    const updateData = {
      name: user.name,
      email: user.email,
      password: user.password,
      updatedAt: new Date(),
    };

    await UserModel.updateOne(
      { _id: new ObjectId(user._id) },
      { $set: updateData }
    );

    return user;
  }

  async delete(id: string): Promise<boolean> {
    if (!ObjectId.isValid(id)) return false;
    const result = await UserModel.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

}
