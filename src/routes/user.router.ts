import { Router } from 'express'
import { CreateUserController } from '../Controllers/CreateUserController';

export const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post('/', createUserController.handle)


