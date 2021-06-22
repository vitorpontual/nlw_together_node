import { Router } from 'express'
import { CreateUserController } from '../Controllers/CreateUserController';

const userRouter = Router();

const createUserController = new CreateUserController();


userRouter.post('/', createUserController.handle)


export default userRouter