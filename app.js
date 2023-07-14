import express from "express";
import config from "./config/config.js";

const PORT = config.PORT
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"),

app.get("/" ,(req, res, next) =>{
    res.render("login", {
        pageTitle: "Login",
    })
})

app.listen(PORT, () => {
    console.log(`⚡️[server] server started @ http://localhost:${PORT}`) 
})