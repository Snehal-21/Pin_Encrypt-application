import express from "express";
import { register } from "../controllers/userControllers.js";
import { checkeCpassword, checkemail, checkepassword, checkepin, checkname } from "../middlewares/authMiddlewares.js";
const router =express.Router();

router.post('/register',checkname,checkemail,checkepassword,checkeCpassword,checkepin,register)

export default router;