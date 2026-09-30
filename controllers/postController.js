import Post from "../models/Post.js"

class PostController {
    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch(e) {
            res.status(500).json(e);
        }
    }
}


export default new PostController();