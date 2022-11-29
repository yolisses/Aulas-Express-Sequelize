import { Sequelize } from "sequelize";
import {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
} from "../env.js";

export const sequelize = new Sequelize(
  POSTGRES_DATABASE,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  {
    host: POSTGRES_HOST,
    dialect: "postgres",
  }
);
