import express from "express";
import AuthController from "../controllers/authController.js"

const authRouter = express.Router();

authRouter.get("/registration", AuthController.getRegistration);
authRouter.get("/login", AuthController.getLogin);
authRouter.post("/registration", AuthController.registration);
authRouter.post("/login", AuthController.login);


export default authRouter;
