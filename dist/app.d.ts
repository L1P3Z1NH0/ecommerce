import type { Application } from 'express';
declare class App {
    app: Application;
    constructor();
    private middlewares;
    private routes;
    private errorHandler;
    start(): Promise<void>;
}
declare const _default: App;
export default _default;
//# sourceMappingURL=app.d.ts.map