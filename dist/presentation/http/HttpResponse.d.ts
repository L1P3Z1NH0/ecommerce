import type { Response } from "express";
export declare class HttpResponse {
    static ok<T>(res: Response, data: T): Response<any, Record<string, any>>;
    static created<T>(res: Response, data: T): Response<any, Record<string, any>>;
}
//# sourceMappingURL=HttpResponse.d.ts.map