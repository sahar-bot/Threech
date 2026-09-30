import express from "express";
import PostController from "../controllers/postController.js";

const postRouter = express.Router();


postRouter.get("/", PostController.getAll);


export default postRouter;