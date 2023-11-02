import { Router } from 'express';
import userRouter from '../controllers/UserController';

const routerUsers = Router();

routerUsers.use('/users', userRouter);

export default routerUsers;