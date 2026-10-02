import express from "express"
import mongoose from "mongoose";
import pug from "pug";
import path from "path";
import postRouter from "./routers/postRouter.js";
import authRouter from "./routers/authRouter.js";


const PORT = 3000;
const DB = `mongodb+srv://admin:admin@cluster0.actk0hu.mongodb.net/?appName=Cluster0`;

const app = express();

app.use(express.json());

// otherwise form doesn't work
app.use(express.urlencoded({ extended: true }));

app.use("/", postRouter);
app.use("/auth", authRouter);


app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(process.cwd()));




async function startApp() {
    try {
        await mongoose.connect(DB);
        app.listen(PORT, () => console.log("Started"));
    } catch(e) {
        console.log(e);
    }
}

startApp()