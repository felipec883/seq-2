import { Sequelize } from "sequelize-typescript";
import { DATABASE, DB_PASSWORD, DB_PORT } from "../common/constants.js";

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: DATABASE,
  username: "postgres",
  password: DB_PASSWORD,
  port: +DB_PORT,
  logging: (...msg: any) => console.log(msg),
  models: [],
  define: {
    freezeTableName: true,
  },
});

// sequelize.sync(); */
