import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || '',
  accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION || '15m',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || '',
  refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION || '7d',
  mongodbUri: process.env.MONGODB_URI || '',
  dbName: process.env.DB_NAME || '',
};
