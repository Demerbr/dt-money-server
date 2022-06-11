import "reflect-metadata";
import { DataSource } from "typeorm";

//yarn typeorm migration:run -- -d  ./src/database

//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//yarn typeorm migration:create src/database/migrations/CreateCategories



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "dtserver",
    password: "1234",
    database: "dtmoney",
    entities: [],
    migrations: ["src/database/migrations/*.ts"],
})

AppDataSource.initialize().then(async () => {
    console.log("Initializing the database...")
}).catch((err)=> console.log(err))