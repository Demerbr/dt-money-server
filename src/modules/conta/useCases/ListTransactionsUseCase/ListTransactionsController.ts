import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTransactionsUSeCase } from "./ListTransactionsUseCase";






class ListTransactionsController{

    async handle(request: Request, response: Response): Promise<Response>{
        const listTransactionsUseCase = container.resolve(ListTransactionsUSeCase)

        const transactions = await listTransactionsUseCase.execute()
        
        return response.status(200).json({transactions})
    }
}

export { ListTransactionsController }