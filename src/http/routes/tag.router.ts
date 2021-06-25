import { Router } from 'express';
import { CreateTagController } from '../../controllers/CreateTagController';
import { ListTagsController } from '../../controllers/ListTagsController';
import { ensureAdmin } from '../middlewares/ensureadmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

export const tagRouter = Router()

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController()



tagRouter.post("/", ensureAuthenticated, ensureAdmin,createTagController.handle)
tagRouter.get("/", ensureAuthenticated, listTagsController.handle)

