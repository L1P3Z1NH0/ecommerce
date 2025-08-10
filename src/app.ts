import cors from 'cors';
import express from 'express';

import config from './config/env';
import userRoutes from './presentation/routes/UserRoutes';

import type { Application, Request, Response, NextFunction } from 'express';
import { connect } from './infrastructure/database/mongoDb/mongoDbClient';
import { errorHandler } from './middlewares/ErrorHandler';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(errorHandler);
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/api', userRoutes);

    // Health check endpoint
    this.app.get('/health', (req: Request, res: Response) => {
      res.status(200).json({ status: 'ok' });
    });
  }

  public async start(): Promise<void> {
    try {
      await connect();
      const PORT = config.port;
      this.app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Failed to start the server:', error);
      process.exit(1);
    }
  }
}

export default new App();
