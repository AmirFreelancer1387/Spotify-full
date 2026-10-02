import express, { Router } from 'express';
import { loginUser, myProfile, registerUser } from './controller.js';
import isAuth from './middleware.js';
const router = express.Router();
// register User
router.post('/user/register', registerUser);
// login User
router.post('/user/login', loginUser);
// useer panel
router.get('/user/me', isAuth, myProfile);
export default router;
//# sourceMappingURL=routes.js.map