import "dotenv/config";

const DATABASE = process.env.DATABASE;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT as string;

export { DATABASE, DB_PASSWORD, DB_PORT };
