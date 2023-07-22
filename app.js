import express from "express";
import config from "./config/config.js";
import bodyParser from "body-parser";
import { transporter } from "./config/api.js";



const PORT = config.PORT
transporter();
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"),
app.use(bodyParser.urlencoded({extended: false}));

app.get("/" ,(req, res, next) =>{
    res.render("login", {
        pageTitle: "Login",
    })
})

app.post("/login", (req, res, next) =>{
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.confirmPassword);

    res.redirect("/");

    transporter.sendMail({
        to: req.body.email,
        from: "madukwes@yahoo.com",
        subject: "SignUp Successfully",
        html: "<h1>You have Successfully Registered! </h1>"
    })

   
 
});

app.listen(PORT, () => {
    console.log(`⚡️[server] server started @ http://localhost:${PORT}`) 
})