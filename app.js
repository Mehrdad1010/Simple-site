const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const Routers = require("./routers/pages")

const app = express();
const port = 5000;

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) =>{
    console.log(req.url);
    next()
})

app.use("/", Routers);

app.listen(port, function() {
    console.log(`server is runing on port ${port}`);
    
})