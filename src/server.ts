import "reflect-metadata";
import express, { Request, Response, Router } from "express"

import "./database";
import "./shared/container";



import { router } from "./routes";

const app = express()



app.use(express.json())
app.use(router)





app.get("/", (request: Request, response: Response)=>{
    response.send("Servidor Online!")
})




app.listen(2000,()=>{
    console.log("Server is Runing on port 2000")
})