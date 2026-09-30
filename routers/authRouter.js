import express from "express";
import AuthController from "../controllers/authController.js"

const authRouter = express.Router();


authRouter.post("/registration", AuthController.registration);


export default authRouter;
