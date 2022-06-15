import { Router } from "express";
import { CreateTransactionController } from "../modules/conta/useCases/CreateTransaction/CreateTransactionController";
import { DeleteTransactionController } from "../modules/conta/useCases/DeleteTransaction/DeleteTransactionController";
import { ListTransactionsController } from "../modules/conta/useCases/ListTransactionsUseCase/ListTransactionsController";
import { transactionSchema } from "../validator/createTransaction-schema";
import { ValidatorCreteTransaction } from "../validator/validateCreateTranaction";




const transactionRouter = Router()


const createTransactionController = new CreateTransactionController()
const listTransactionsController = new ListTransactionsController()
const deleteTransactionController = new DeleteTransactionController()


transactionRouter.post("/", transactionSchema, ValidatorCreteTransaction, createTransactionController.handle)

transactionRouter.get("/", listTransactionsController.handle)

transactionRouter.delete("/:id", deleteTransactionController.handler)








export { transactionRouter }