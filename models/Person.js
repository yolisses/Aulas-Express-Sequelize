const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Person = sequelize.define(
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

module.exports = Person;
