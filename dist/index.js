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
    let { model, color, year, power, bodytype, wheelCount, draft, wingspan } = req.body;
    let car = { model, color, year, power, bodytype, wheelCount };
    let boat = { model, color, year, power, draft };
    let plane = { model, color, year, power, wingspan };
    //console.log(model)
    //vehicles.push({model: req.body.model, color: req.body.color, year: req.body.power, power: req.body.power})
    vehicles.push(car);
    vehicles.push(boat);
    vehicles.push(plane);
    //vehicles.push({model: "volvo", color: "Red", year: 60, power: 60,bodytype: "sedan",wheelCount: 5})
    //res.send(vehicles)
    res.status(201).send("Vehicle added");
    //vehicles.push(car)
});
app.get("/vehicle/search/:model", (req, res) => {
    //name: req.body.name
    const findModel = req.params.model;
    let targetModel = vehicles.find((obj) => {
        return obj.model === findModel;
    });
    //console.log(carModel)
    if (!targetModel) {
        //res.send(carModel)
        res.status(404).send(404);
        //res.send(targetModel)
    }
    else {
        //res.send(404)
        res.send(targetModel);
    }
    //res.send(carModel)
});
app.listen(port, () => {
    console.log("TS server running at port:" + port);
});
