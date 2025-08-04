"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./config/env.js"));
const UserRoutes_1 = __importDefault(require("./presentation/routes/UserRoutes.js"));
const mongoDbClient_1 = require("./infrastructure/database/mongoDb/mongoDbClient.js");
const ErrorHandler_1 = require("./middlewares/ErrorHandler.js");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.errorHandler();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(ErrorHandler_1.errorHandler);
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use('/api', UserRoutes_1.default);
        // Health check endpoint
        this.app.get('/health', (req, res) => {
            res.status(200).json({ status: 'ok' });
        });
    }
    errorHandler() {
        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    }
    async start() {
        try {
            await (0, mongoDbClient_1.connect)();
            const PORT = env_1.default.port;
            this.app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        }
        catch (error) {
            console.error('Failed to start the server:', error);
            process.exit(1);
        }
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map