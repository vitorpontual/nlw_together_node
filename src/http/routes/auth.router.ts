import { Router } from 'express';
import { AuthenticateUserController } from '../../controllers/AuthenticateUserController';


const authRouter = Router()

const authenticateUserController = new AuthenticateUserController()

authRouter.post('/', authenticateUserController.handle)

export default authRouter 