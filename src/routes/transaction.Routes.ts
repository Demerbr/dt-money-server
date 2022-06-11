import { Router } from "express";
import { CreateTransactionController } from "../modules/conta/useCases/CreateTransaction/CreateTransactionController";




const transactionRouter = Router()


const createTransactionController = new CreateTransactionController()


transactionRouter.post("/", createTransactionController.handle)





export { transactionRouter }