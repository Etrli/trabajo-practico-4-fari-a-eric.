import dotenv from "dotenv"
import express from "express"
import { createCharacter, eliminarPersonaje, obtenerPersonajes, obtenerPorID, updateCharacter } from "../controllers/user.controllers.js";

const routes = express.Router();


routes.get("/api/get",obtenerPersonajes);
routes.get("/api/get/:id",obtenerPorID)
routes.post("/api/create",createCharacter);
routes.delete("/api/destroy/:id",eliminarPersonaje);
routes.put("/api/update/:id",updateCharacter);

export default routes