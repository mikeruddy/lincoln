import { createConnection, ConnectionOptions } from "typeorm";
import { Donate } from "../app/models";
import { config, DIALECT } from "../config";


const options: ConnectionOptions = {
    type: "sqlite",
    database: `app.sqlite`,
    entities: [ Donate ],
    logging: true,
    migrations: ["app/migration/*.js"],
    cli: { 
        "migrationsDir": "app/migration" 
    }
  }

// let mysqlConfig = {
//     database: config.DATABASE.DB,
//     entities: [
//         Sample,
//     ],
//     host: config.DATABASE.SERVER,
//     logging: false,
//     password: config.DATABASE.PASSWORD,
//     port: config.DATABASE.PORT_DB,
//     synchronize: true,
//     type: DIALECT,
//     username: config.DATABASE.USER_DB,
// };

export const Connection = createConnection(options);
