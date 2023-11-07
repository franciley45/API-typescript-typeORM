import { Request, Response, Router } from 'express';
import UserService from '../services/UserService';


const userRouter = Router();

userRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
});

userRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    const { name, email, password } = req.body

    const { status, message } = await UserService.createUser(name, email, password);

    if (status === 409) return res.status(status).json({ message });

    return res.status(status).json(message);
});

userRouter.post('/login', async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body

    const { status, message } = await UserService.loginUser(email, password);

    if (status === 409) return res.status(status).json({ message });

    return res.status(status).json(message);
});

export default userRouter;