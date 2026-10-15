import express from "express"
import mongoose from "mongoose";
import pug from "pug";
import path from "path";
import postRouter from "./routers/postRouter.js";
import authRouter from "./routers/authRouter.js";
import cookieParser from "cookie-parser";


const PORT = process.env.PORT ?? 3000;
const DB = process.env.DB;

const app = express();


app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static("views"));
app.use(express.json());

// otherwise form doesn't work
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/", postRouter);


async function startApp() {
    try {
        await mongoose.connect(DB);
        app.listen(PORT, () => console.log("Started"));
    } catch(e) {
        console.log(e);
    }
}

startApp()