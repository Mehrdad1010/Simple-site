const express = require("express");
const path = require("path");

const Router = express.Router();
const app = express();

data = require(path.join(__dirname, "../data/cars.json"))

Router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/Home.html"))
})

Router.get("/data", (req, res) => {  
    res.sendFile(path.join(__dirname, "../data/cars.json"))
})

for (let index = 0; index < 6; index++) {
    Router.get(`/car${index}`, (req, res) => {
        res.sendFile(path.join(__dirname, data[index]["image"]))
    })
    
}

Router.get("/Home", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/Home.html"))
})

Router.get("/About", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/About.html"))
})

Router.get("/Contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/Contact.html"))
})

for (let index = 0; index < 6; index++) {
    Router.get(`/car_info${index}`, (req, res) => {
        res.sendFile(path.join(__dirname, `../public/html/car${index}.html`))
    })
    
}


module.exports = Router;