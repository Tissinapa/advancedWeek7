import express, {Express , Request, Response } from "express"
import path from "path"
import bodyParser from "body-parser"

const app: Express = express()
const port: number  = 5000


app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(bodyParser.json());



interface Automobile {
    model: string;
    color: string;
    year: number;
    power: number;
}
let vehicles: Automobile[]=[]

//let kaara: Automobile = {model:"Volvo",color: "red", year:100, power: 9000}

//console.log("hello from client side") 

app.get("/",(req: Request, res: Response)=>{
    res.send("hello from TS-server") 
})

app.get("/hello",(req: Request, res: Response)=>{
    res.send("Hello world")
})

app.post("/vehicle/add", (req: Request, res: Response)=>{
    
    let car = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    }
    //console.log(req.body.model)
    
    //vehicles.push({model: "volvo", color: "punainen", year: 1990, power: 100})
    //res.send(req.body)
    vehicles.push(car)
    //res.send(vehicles)

    //console.log(req.body.model)
    res.status(201).send("Vehicle added")
})

app.listen(port, ()=>{
    console.log("TS server running at port:" +port)
})