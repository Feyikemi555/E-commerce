import {Router} from "express";
import {signup,login} from "../controllers/patientController.js"

const router = Router()

router.post('/login', login)

router.post('/signup', signup)
router
   


export default router