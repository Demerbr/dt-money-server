import { inject, injectable } from "tsyringe";
import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";





@injectable()
class ListTransactionsUSeCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository
    ){}

    async execute (): Promise<Transaction[]>{

        const transactions = this.transactionRepository.listAllTransactions();

        return transactions

    }

}


export { ListTransactionsUSeCase }