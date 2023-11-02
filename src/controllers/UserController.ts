import { Request, Response, Router } from 'express';
import UserService from '../services/UserService';


const userRouter = Router();

userRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
});

userRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    const { name, email } = req.body
    const users = await UserService.createUser(name, email);
    return res.status(200).json(users);
});

export default userRouter;