"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnection = exports.getDb = exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'ecommerce';
let client;
let db;
const connectToDatabase = async () => {
    if (db)
        return db;
    try {
        client = new mongodb_1.MongoClient(MONGODB_URI);
        await client.connect();
        db = client.db(DB_NAME);
        console.log('Successfully connected to MongoDB');
        return db;
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};
exports.connectToDatabase = connectToDatabase;
const getDb = () => {
    if (!db)
        throw new Error('Database not initialized');
    return db;
};
exports.getDb = getDb;
const closeConnection = async () => {
    if (client) {
        await client.close();
        db = null;
    }
};
exports.closeConnection = closeConnection;
//# sourceMappingURL=database.js.map