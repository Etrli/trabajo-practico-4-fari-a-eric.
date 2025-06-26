import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Character = sequelize.define("character", {
  name: { type: DataTypes.STRING, allowNull: false},
  ki: { type: DataTypes.INTEGER, allowNull: false},
  race: { type: DataTypes.STRING, allowNull: false},
  gender: { type: DataTypes.STRING, allowNull: false},
  description: { type: DataTypes.STRING,allowNull: true},
});

export default Character