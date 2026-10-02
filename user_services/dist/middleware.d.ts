import type { NextFunction, Request, Response } from "express";
import { type Iuser } from "./model.js";
export interface AuthenticatedRequest extends Request {
    user?: Iuser | null;
}
declare const isAuth: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Promise<void>;
export default isAuth;
//# sourceMappingURL=middleware.d.ts.map