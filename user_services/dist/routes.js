import express, { Router } from 'express';
import { loginUser, registerUser } from './controller.js';
const router = express.Router();
// register User
router.post('/user/register', registerUser);
// login User
router.post('/user/login', loginUser);
export default router;
//# sourceMappingURL=routes.js.map