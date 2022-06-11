import { Router } from "express";
import { transactionRouter } from "./transaction.Routes";



const router = Router();

router.use("/transaction", transactionRouter)


export { router }