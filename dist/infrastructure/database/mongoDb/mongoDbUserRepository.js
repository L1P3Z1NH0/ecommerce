"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbUserRepository = void 0;
const UserModel_1 = __importDefault(require("../../../domain/models/UserModel.js"));
const mongodb_1 = require("mongodb");
const User_1 = require("../../../domain/entities/User.js");
class MongoDbUserRepository {
    async create(user) {
        const now = new Date();
        const userData = {
            name: user.name,
            email: user.email,
            password: user.password,
            gender: user.gender,
            birthDate: user.birthDate,
            createdAt: user.createdAt || now,
            updatedAt: user.updatedAt || now,
        };
        const result = await UserModel_1.default.create(userData);
        return new User_1.User({
            _id: result._id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            gender: userData.gender,
            birthDate: userData.birthDate,
        });
    }
    async findByEmail(email) {
        const user = await UserModel_1.default.findOne({ email });
        return user ? this.mapToUser(user) : null;
    }
    async findById(id) {
        if (!mongodb_1.ObjectId.isValid(id))
            return null;
        const user = await UserModel_1.default.findOne({ _id: new mongodb_1.ObjectId(id) });
        return user ? this.mapToUser(user) : null;
    }
    async update(user) {
        if (!user._id)
            throw new Error('User ID is required for update');
        const updateData = {
            name: user.name,
            email: user.email,
            password: user.password,
            updatedAt: new Date(),
        };
        await UserModel_1.default.updateOne({ _id: new mongodb_1.ObjectId(user._id) }, { $set: updateData });
        return user;
    }
    async delete(id) {
        if (!mongodb_1.ObjectId.isValid(id))
            return false;
        const result = await UserModel_1.default.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        return result.deletedCount > 0;
    }
    mapToUser(data) {
        return new User_1.User({
            _id: data._id,
            name: data.name,
            email: data.email,
            password: data.password,
            gender: data.gender,
            birthDate: data.birthDate,
        });
    }
}
exports.MongoDbUserRepository = MongoDbUserRepository;
//# sourceMappingURL=mongoDbUserRepository.js.map