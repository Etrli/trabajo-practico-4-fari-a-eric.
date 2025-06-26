import express from "express"
import dotenv from "dotenv"
import routes from "./routes/user.routes.js";
import { startDB } from "./config/database.js";
dotenv.config();

const app = express()
const PORT = process.env.PORT



app.use(express.json()) //se usa para que el servidor lea json
app.use("/",routes)


startDB().then(()=>{

    app.listen(PORT, () => {
  console.log(`EJECUNTANDO EN EL PUERTO: http://localhost:${PORT}`)
})

})

//env
 //database
 //models
//controllers
//routes
//app.js