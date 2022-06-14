import "reflect-metadata";
import express, { NextFunction, Request, Response, Router } from "express"
import cors from "cors"
import bodyParser from "body-parser";

import "./database";
import "./shared/container";



import { router } from "./routes";

const app = express()

app.use(cors())

// app.use((request: Request, response: Response, next: NextFunction) => {


//     response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
//     response.header("Access-Control-Allow-Origin", "*")
    
//     app.use(cors())

//     next()
// })


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.json())
app.use(router)





app.get("/", (request: Request, response: Response)=>{
    response.send("Servidor Online!")
})




app.listen(2000,()=>{
    console.log("Server is Runing on port 2000")
})