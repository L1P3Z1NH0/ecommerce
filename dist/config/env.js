"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    mongodbUri: process.env.MONGODB_URI || 'mongodb://admin:senha123@localhost:27017',
    dbName: process.env.DB_NAME || 'meubanco',
};
//# sourceMappingURL=env.js.map