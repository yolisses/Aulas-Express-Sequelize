import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Person = sequelize.define(
  "Person",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {}
);
