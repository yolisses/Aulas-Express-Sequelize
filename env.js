import dotenv from "dotenv";

dotenv.config();

const {
  API_PORT,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

export {
  API_PORT,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
};
