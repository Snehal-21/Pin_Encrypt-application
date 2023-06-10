import express from "express";
import { login, register, updateUser } from "../controllers/userControllers.js";
import { checkUpdate, checkeCpassword, checkemail, checkepassword, checkepin, checkname, pin } from "../middlewares/authMiddlewares.js";
const router =express.Router();

router.post('/register',checkname,checkemail,checkepassword,checkeCpassword,checkepin,register);
router.post('/login',checkemail,pin,login);
router.post('/updateUser',checkname,checkemail,checkepassword,checkepin,checkUpdate,updateUser)

export default router;