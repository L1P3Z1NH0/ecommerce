// src/config/mongoose.ts
import mongoose from 'mongoose';
import config from '../../../config/env';

let isConnected = false;

export const connect = async (): Promise<typeof mongoose> => {
  if (isConnected) return mongoose;

  console.log('Connecting to MongoDB...');
  try {
    const mongoUri = config.mongodbUri;
    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await mongoose.connect(mongoUri, {
      dbName: config.dbName, // Define o nome do banco (opcional se já estiver na URI)
    });

    isConnected = true;
    console.log('Connected to MongoDB with Mongoose');
    return mongoose;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    await closeConnection();
    throw new Error('Failed to connect to MongoDB');
  }
};

export const closeConnection = async (): Promise<void> => {
  if (isConnected) {
    await mongoose.disconnect();
    isConnected = false;
    console.log('MongoDB connection closed');
  }
};