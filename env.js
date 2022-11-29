import dotenv from "dotenv";

dotenv.config();

const {
  API_PORT,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
} = process.env;

export {
  API_PORT,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
};
