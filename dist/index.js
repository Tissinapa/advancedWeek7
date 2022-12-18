"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
let vehicles = [];
app.get("/hello", (req, res) => {
    res.send("Hello world");
});
app.post("/vehicle/add", (req, res) => {
    let car = {
        model: "volvo",
        color: "puinainen",
        year: 1234,
        power: 123
    };
    //console.log(model)
    vehicles.push({ model: req.body.model, color: req.body.color, year: req.body.power, power: req.body.power });
    res.status(201).send("Vehicle added");
    //res.send(vehicles[1])
    //vehicles.push(car)
    //res.send(req.body.model) 
    //console.log(vehicles)
    //res.status(201).send("Vehicle added")
});
app.get("/vehicle/search/:model", (req, res) => {
    //name: req.body.name
    const findModel = req.params.model;
    let carModel = vehicles.filter((obj) => {
        return obj.model === findModel;
    });
    //console.log(carModel)
    if (!carModel) {
        res.send(404);
    }
    else {
        res.send(carModel);
    }
    //res.send(carModel)
});
app.listen(port, () => {
    console.log("TS server running at port:" + port);
});
