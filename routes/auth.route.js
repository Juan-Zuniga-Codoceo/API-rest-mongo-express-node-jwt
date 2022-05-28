import {Router} from "express";
import { login, register, infoUser } from "../controllers/auth.controller.js";
import {body} from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.post('/register',[
    body('email',"Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password','password incorrecto')
    .trim()
    .isLength({min: 6 })
],
validationResultExpress,
register
);
router.post(
    '/login',
    [
        body('email',"Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
        body('password','password incorrecto').trim().isLength({min: 6 }),
],
validationResultExpress,
login);

router.get('/protected', requireToken , infoUser);

export default router;