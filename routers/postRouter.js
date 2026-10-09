import express from "express";
import PostController from "../controllers/postController.js";
import { verifyToken } from "../utils/authMiddleware.js";

const postRouter = express.Router();


postRouter.get("/", verifyToken, PostController.getAll);
postRouter.post("/", verifyToken, PostController.createPost);
postRouter.delete("/:id", verifyToken, PostController.deletePost);


export default postRouter;