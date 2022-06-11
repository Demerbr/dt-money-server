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
}

export { ITransactionRepository, ITransactionCreateDTO}