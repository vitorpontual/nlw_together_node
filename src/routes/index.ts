import { Router } from "express";
import users from './user.router'
const router = Router()

router.use('/users', users)

export { router }