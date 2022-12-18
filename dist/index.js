"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
let vehicles = [];
//let kaara: Automobile = {model:"Volvo",color: "red", year:100, power: 9000}
//console.log("hello from client side") 
app.get("/hello", (req, res) => {
    res.send("Hello world");
});
app.post("/vehicle/add", (req, res) => {
    const car = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    };
    /*     const car2: Automobile = {
            model: "voo",
            color: "asdf",
            year: 123,
            power: 123
        } */
    //console.log(req.body.model)
    //vehicles.push({model: "volvo", color: "punainen", year: 1990, power: 100})
    //res.send(req.body)
    vehicles.push(car);
    res.send(vehicles);
    //console.log(req.body.model)
    //res.status(201).send("Vehicle added")
});
app.listen(port, () => {
    console.log("TS server running at port:" + port);
});
