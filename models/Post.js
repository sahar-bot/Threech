import mongoose from "mongoose";

const Post = new mongoose.Schema({
    author: {type: Stirng, required: true},
    title: {type: Stirng, required: true},
    content: {type: Stirng, required: true}
});


export default mongoose.model("Post", Post);