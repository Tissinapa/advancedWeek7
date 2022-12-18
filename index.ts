import express, {Express , Request, Response } from "express"
import path from "path"
import bodyParser from "body-parser"

const app: Express = express()
const port: number  = 3000


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

 
app.get("/hello",(req: Request, res: Response)=>{
    res.send("Hello world")
})

app.post("/vehicle/add", (req: Request , res: Response)=>{
    
    let car: Automobile = {
        model: "volvo",
        color: "puinainen",
        year: 1234,
        power: 123
    }

    //console.log(model)

    vehicles.push({model: req.body.model, color: req.body.color, year: req.body.power, power: req.body.power})
    
    res.status(201).send("Vehicle added") 
    
    //res.send(vehicles[1])
    //vehicles.push(car)
    //res.send(req.body.model) 
    

    //console.log(vehicles)
    //res.status(201).send("Vehicle added")
})

app.listen(port, ()=>{
    console.log("TS server running at port:" +port)
})