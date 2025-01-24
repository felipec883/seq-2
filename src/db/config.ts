import { Dialect } from "sequelize";
import { DATABASE, DB_PASSWORD, DB_PORT } from "../common/constants.js";
const config = {
  development: {
    username: "postgres",
    password: DB_PASSWORD,
    database: DATABASE,
    host: "127.0.0.1",
    dialect: "postgres" as Dialect,
    // Replace with 'mysql', 'sqlite', etc. if needed
  },
  test: {
    username: "your_username",
    password: "your_password",
    database: "test_database",
    host: "127.0.0.1",
    dialect: "postgres" as Dialect,
  },
  production: {
    username: "your_username",
    password: "your_password",
    database: "production_database",
    host: "127.0.0.1",
    dialect: "postgres" as Dialect,
  },
};

export default config;
