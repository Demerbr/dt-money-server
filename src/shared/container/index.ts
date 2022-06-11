import { container } from "tsyringe"
import { TransactionRepository } from "../../modules/conta/repositories/implementations/TransactionRepository"
import { ITransactionRepository } from "../../modules/conta/repositories/ITransactionRepository"


container.registerSingleton<ITransactionRepository>(
    "TransactionRepository",
    TransactionRepository,
)