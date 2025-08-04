import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'ecommerce';

let client: MongoClient;
let db: any;

export const connectToDatabase = async () => {
  if (db) return db;

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log('Successfully connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export const getDb = () => {
  if (!db) throw new Error('Database not initialized');
  return db;
};

export const closeConnection = async () => {
  if (client) {
    await client.close();
    db = null;
  }
};
