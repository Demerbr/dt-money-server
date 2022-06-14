import { Router } from "express";
import { CreateTransactionController } from "../modules/conta/useCases/CreateTransaction/CreateTransactionController";
import { ListTransactionsController } from "../modules/conta/useCases/ListTransactionsUseCase/ListTransactionsController";




const transactionRouter = Router()


const createTransactionController = new CreateTransactionController()
const listTransactionsController = new ListTransactionsController()


transactionRouter.post("/", createTransactionController.handle)

transactionRouter.get("/", listTransactionsController.handle)







export { transactionRouter }