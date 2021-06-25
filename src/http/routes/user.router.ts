import { Router } from 'express'
import { CreateUserController } from '../../controllers/CreateUserController';
import { ListUserReceiveComplimentsController } from '../../controllers/ListUserReceiveComplimentsController';
import { ListUserController } from '../../controllers/ListUsersController';
import { ListUserSendComplimentsController } from '../../controllers/ListUserSendComplimentsController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

export const userRouter = Router();

const createUserController = new CreateUserController();
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserController = new ListUserController();

userRouter.post('/', createUserController.handle)

userRouter.get('/all', listUserController.handle)
userRouter.get('/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)
userRouter.get('/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle)



