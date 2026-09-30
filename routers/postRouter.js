import express from "express";
import PostController from "../controllers/postController.js";

const postRouter = express.Router();


postRouter.get("/", PostController.getAll);
postRouter.post("/", PostController.createPost);
postRouter.delete("/:id", PostController.deletePost);


export default postRouter;