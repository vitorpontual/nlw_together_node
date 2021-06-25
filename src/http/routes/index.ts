import { Router } from "express";
import { userRouter as users} from './user.router'
import { tagRouter as tags} from './tag.router'
import auth from './auth.router'
import compliments from './compliment.router'
const router = Router()

router.use('/users', users)
router.use('/tags', tags)
router.use('/session', auth)
router.use('/compliments', compliments)

export { router }