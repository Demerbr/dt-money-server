import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { Transaction } from "../../entities/Transaction";
import { ITransactionCreateDTO, ITransactionRepository } from "../ITransactionRepository";






class TransactionRepository implements ITransactionRepository{
    
    private repository: Repository<Transaction>

    constructor(){
        this.repository = AppDataSource.getRepository(Transaction)
    }
    
    
    async create({
        title,
        type,
        category,
        amount
    }: ITransactionCreateDTO): Promise<Transaction> {
        const transaction = this.repository.create({
            title,
            type,
            category,
            amount
        });

        await this.repository.save(transaction)

        return transaction
    }



    async listAllTransactions(): Promise<Transaction[]> {
        const transactions = await this.repository.find()

        return transactions
    }

    async deleteTransaction(id: string): Promise<void> {
        
         await this.repository.delete(id)

       
    }

    
}

export{ TransactionRepository }