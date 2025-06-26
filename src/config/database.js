import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: DB_DIALECT,
  }
);

export const startDB = async () => {
  try {
    await sequelize.authenticate(
    console.log("Se estableció conexion"));
    await sequelize.sync();

  } catch (error) {" Hubo un Error al establecer conexión",error}
};
