import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import path from "path";

const PORT = 3000;
const DB_URL = `mongodb+srv://admin:admin@cluster0.actk0hu.mongodb.net/?appName=Cluster0`;

const app = express();



// app.set("view engine", "pug");
// app.set("views", path.join(process.cwd()));




app.use(express.json())



// app.use(express.static(process.cwd()));



app.use("/api", router)



async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("Server is running")); 
    } catch(e) {
        console.log(e);
    }
}

startApp();