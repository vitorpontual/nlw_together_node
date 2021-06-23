import { Router } from "express";
import { userRouter as users} from './user.router'
import { tagRouter as tags} from './tag.router'
const router = Router()

router.use('/users', users)
router.use('/tags', tags)

export { router }