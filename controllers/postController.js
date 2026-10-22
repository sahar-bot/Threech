import Post from "../models/Post.js"


class PostController {
    async getAll(req, res) {
        try {
            const posts = await Post.find();
            // res.json(posts);

            res.render("index", {posts});
        } catch(e) {
            res.status(500).render("index", {posts, error: "Something went wrong."});
        }
    }

    async createPost(req, res) {
        try {
            const { title, content} = req.body;
            const author = req.user.username;
            const post = await Post.create({author, title, content});
            // res.status(200).json(post);
            res.redirect("/");
        } catch(e) {
            const posts = await Post.find();
            res.status(500).render("index", {posts, error: "Something went wrong."});
        }
    }

    async deletePost(req, res) {
        try {
            const {id} = req.params;
            const author = req.user;
            if (!id) {
                return res.status(400).render("index", {posts, error: "No id provided."});
            }

            const post = await Post.findById(id);

            if (post.author !== author.username) {
                return res.status(403).render("index", {posts, error: "Forbidden access."});
            }
            
            
            await Post.findByIdAndDelete(id);
            
            // res.render("index", {uptPosts});
            res.redirect("/");
        } catch(e) {
            const posts = await Post.find();
            res.status(500).render("index", {posts, error: "Something went wrong."});
        }
    }
}


export default new PostController();