import "reflect-metadata";
import express, { Request, Response, Router } from "express"

const app = express()


app.get("/", (request: Request, response: Response)=>{
    response.send("Servidor Online!")
})




app.listen(2000,()=>{
    console.log("Server is Runing on port 2000")
})