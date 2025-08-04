import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  mongodbUri: process.env.MONGODB_URI || 'mongodb://admin:senha123@localhost:27017',
  dbName: process.env.DB_NAME || 'meubanco',
};
