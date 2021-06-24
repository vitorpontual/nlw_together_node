import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { ensureAdmin } from '../middlewares/ensureadmin';

export const tagRouter = Router()

const createTagController = new CreateTagController();


tagRouter.post("/", ensureAdmin, createTagController.handle)

