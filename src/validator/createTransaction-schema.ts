import { body } from "express-validator";


const schema = [
    body("title").notEmpty().withMessage("field cannot be empty"),
    body("category").notEmpty().withMessage("field cannot be empty"),
    body("amount").isNumeric()
]

export { schema as transactionSchema}