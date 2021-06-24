import { Router } from 'express';
import { CreateComplimentController } from '../controllers/CreateComplimentController';

const complimentRouter = Router();


const createComplimentController = new CreateComplimentController()

complimentRouter.post('/', createComplimentController.handle)


export default complimentRouter

