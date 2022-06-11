import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";




class CreateTransactionController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { title, type, category, amount } = request.body;

        const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

        const transaction = await createTransactionUseCase.execute({title, type, category, amount})

        return response.status(201).json({transaction})
    }

}

export { CreateTransactionController }