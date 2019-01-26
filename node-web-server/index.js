const express = require("express");
const app = express();
const path = require("path");
const config = require("./config");
const hbs = require("hbs");

// middleware to register static folder
app.use(express.static(path.resolve(__dirname+'/public')));

// middleware to use templating engine
app.set({"view engine": "hbs"});

app.get("/", (req, res) => {
    return res.send({
        "name": "Divyashu Bhatnagar",
        age: 23
    });
})

app.get("/help", (req, res) => {
    res.render("help.hbs", {
        pageTitle: "Help",
        pageName: "Help Page",
        year: new Date().getFullYear()
    });
});

app.get("*", (req, res) => {
    res.send("<h2>Can't get this route</h2>");
})




app.listen(config.port, () => console.log(`Listening to port ${config.port}`));