import { inject, injectable } from "tsyringe";
import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

interface IRequest{
    title: string;
    type: string;
    category: string;
    amount: number;
}

@injectable()
class CreateTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository
    ){}

    async execute({title, type, category, amount}: IRequest): Promise<Transaction>{

            const transaction = await this.transactionRepository.create({title, type, category, amount});

            return transaction

        }
}

export { CreateTransactionUseCase }