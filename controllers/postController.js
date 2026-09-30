import Post from "../models/Post.js"

class PostController {
    async getAll(req, res) {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async createPost(req, res) {
        try {
            const {author, title, content} = req.body;
            const post = await Post.create({author, title, content});
            res.json(post);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePost(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json("No id provided");
            }
            const post = await Post.findByIdAndDelete(id);
            res.json(post);
        } catch(e) {
            res.status(500).json(e);
        }
    }
}


export default new PostController();