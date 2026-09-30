import express from "express"
import mongoose from "mongoose";
import postRouter from "./routers/postRouter.js";

const PORT = 3000;
const DB = `mongodb+srv://admin:admin@cluster0.actk0hu.mongodb.net/?appName=Cluster0`;

const app = express();

app.use(express.json());

app.use("/", postRouter);

// app.set("view-engine", "pug");


async function startApp() {
    try {
        await mongoose.connect(DB);
        app.listen(PORT, () => console.log("Started"));
    } catch(e) {
        console.log(e);
    }
}

startApp()