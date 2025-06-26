import { INTEGER } from "sequelize";
import Character from "../modules/user.modules.js";
import { isLowercase } from "validator";

export const createCharacter = async(req,res)=>{
     const {name,ki,race,gender,description} = req.body

     if(req.body){
        for (let value in req.body){
            if(typeof value === "string"){
                req.body[value] = req.body[value].trim();
            }
        }
     }


    try {
        if (name === undefined) return res.status(400).json, "No pueden haber parametros nulos"
        if (ki === undefined) return res.status(400).json, "No pueden haber parametros nulos"
        if (race === undefined) return res.status(400).json, "No pueden haber parametros nulos"
        if (name === undefined) return res.status(400).json, "No pueden haber parametros nulos"


        const kiEntero = Math.floor(ki);
        if(ki !== kiEntero){res.status(500).json({message: "El Ki tiene que ser entero"})}

        if (gender !== "Male" && gender !== "Female"){
            res.status(400).json({Message:"Tiene que ingresar un valor"});
        }

        if(typeof  description !== "string"){res.status(400).json({Message:"La descripcion tiene que ser un tipo STRING"})}

        const nombreUnico = await Character.findOne({where:{name}});
        if (nombreUnico !== null) return req.status(400).json  ({Message: "El nombre tiene que ser Unico"})
        
        




        Character = Character.create("Se Creó el Personaje",Character)
    } catch (error) {
        res.status(500).json({message: error.message})
    }}