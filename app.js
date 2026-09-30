import express from "express"

const PORT = 3000;

const app = express();

app.use(express.json());



app.get("/", (req, res) => {
    res.json("Treech");
});


async function startApp() {
    try {
        app.listen(PORT, () => console.log("Started"));
    } catch(e) {
        console.log(e);
    }
}

startApp()