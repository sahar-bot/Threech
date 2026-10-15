import express from "express";
import PostController from "../controllers/postController.js";
import { verifyToken } from "../utils/authMiddleware.js";

const postRouter = express.Router();
postRouter.use(verifyToken);


postRouter.get("/", PostController.getAll);
postRouter.post("/", PostController.createPost);

// nice template engnie pug xddddddddddddddddddddddddddddddddddddddddddd
postRouter.post("/:id/delete", PostController.deletePost);


export default postRouter;