"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnection = exports.connect = void 0;
// src/config/mongoose.ts
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = __importDefault(require("../../../config/env.js"));
let isConnected = false;
const connect = async () => {
    if (isConnected)
        return mongoose_1.default;
    console.log('Connecting to MongoDB...');
    try {
        const mongoUri = env_1.default.mongodbUri;
        if (!mongoUri) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }
        await mongoose_1.default.connect(mongoUri, {
            dbName: env_1.default.dbName, // Define o nome do banco (opcional se já estiver na URI)
        });
        isConnected = true;
        console.log('Connected to MongoDB with Mongoose');
        return mongoose_1.default;
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        await (0, exports.closeConnection)();
        throw new Error('Failed to connect to MongoDB');
    }
};
exports.connect = connect;
const closeConnection = async () => {
    if (isConnected) {
        await mongoose_1.default.disconnect();
        isConnected = false;
        console.log('MongoDB connection closed');
    }
};
exports.closeConnection = closeConnection;
//# sourceMappingURL=mongoDbClient.js.map