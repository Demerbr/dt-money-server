import { inject, injectable } from "tsyringe";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";





@injectable()
class DeleteTransactionUseCase {

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository
    ){}

    async execute(id: string): Promise<void>{

        return  await this.transactionRepository.deleteTransaction(id)

    }

}

export { DeleteTransactionUseCase }