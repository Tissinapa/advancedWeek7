import express, {Express , Request, Response } from "express"
import path from "path"
import bodyParser from "body-parser"

const app: Express = express()
const port: number  = 3000


app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(bodyParser.json());

interface Vehicle {
    model: string;
    color: string;
    year: number;
    power: number;
    bodytype?: string;
    wheelCount?: number;
    draft?: number;
    wingspan?: number;
}
interface Car extends Vehicle{
    bodytype: string;
    wheelCount: number;
}
interface Boat extends Vehicle{
    draft: number;
}
interface Plane extends Vehicle {
    wingspan: number;
}
let vehicles: (Vehicle|Car|Boat|Plane)[]=[]

 
app.get("/hello",(req: Request, res: Response)=>{
    res.send("Hello world")
})

app.post("/vehicle/add", (req: Request , res: Response)=>{
    
    let {model,color,year,power,bodytype, wheelCount,draft,wingspan}=req.body

    let car: Vehicle = {model,color,year,power,bodytype,wheelCount}
    let boat: Vehicle =  {model,color,year,power,draft}
    let plane: Vehicle =  {model,color,year,power,wingspan}
    //console.log(model)

    //vehicles.push({model: req.body.model, color: req.body.color, year: req.body.power, power: req.body.power})
    vehicles.push(car)
    vehicles.push(boat)
    vehicles.push(plane)
    //vehicles.push({model: "volvo", color: "Red", year: 60, power: 60})
    //res.send(vehicles)
    res.status(201).send("Vehicle added") 
    
    //vehicles.push(car)


})
app.get("/vehicle/search/:model",(req: Request, res: Response)=>{
    //name: req.body.name
    const findModel: string = req.params.model
    let carModel = vehicles.filter((obj)=>{
        return obj.model===findModel
    })
    //console.log(carModel)
    if(!carModel){
        //res.send(carModel)
        res.send(404)
    }
    else{
        //res.send(404)
        res.send(carModel)
    }
    //res.send(carModel)
})

app.listen(port, ()=>{
    console.log("TS server running at port:" +port)
})