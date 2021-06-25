import { Router } from 'express';
import { CreateComplimentController } from '../../controllers/CreateComplimentController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const complimentRouter = Router();


const createComplimentController = new CreateComplimentController()

complimentRouter.post('/', ensureAuthenticated, createComplimentController.handle)


export default complimentRouter

