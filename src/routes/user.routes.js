import dotenv from "dotenv"
import express from "express"
import { createCharacter, eliminarPersonaje, obtenerPersonajes, obtenerPorID, updateCharacter } from "../controllers/user.controllers.js";

const routes = express.Router();


routes.get("/get",obtenerPersonajes);
routes.get("/get/:id",obtenerPorID)
routes.post("/create",createCharacter);
routes.delete("/destroy/:id",eliminarPersonaje);
routes.put("/update/:id",updateCharacter);

export default routes