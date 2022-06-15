import { Transaction } from "../entities/Transaction";


interface ITransactionCreateDTO{
    title: string;
    type: string;
    category: string;
    amount: number;
    
}


interface ITransactionRepository{
    create(data: ITransactionCreateDTO): Promise<Transaction>

    listAllTransactions(): Promise<Transaction[]>

    deleteTransaction(id: string): Promise<void>
}

export { ITransactionRepository, ITransactionCreateDTO}