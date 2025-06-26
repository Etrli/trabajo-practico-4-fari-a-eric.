
import Character from "../modules/user.modules.js";

export const createCharacter = async (req, res) => {
  const { name, ki, race, gender, description } = req.body;

  if (req.body) {
    for (let value in req.body) {
      if (typeof req.body[value] === "string") {
        req.body[value] = req.body[value].trim();
      }
    }
  }

  try {
    if (name === undefined)
      return res.status(400).json, "No pueden haber parametros nulos";
    if (ki === undefined)
      return res.status(400).json, "No pueden haber parametros nulos";
    if (race === undefined)
      return res.status(400).json, "No pueden haber parametros nulos";
    if (gender === undefined)
      return res.status(400).json, "No pueden haber parametros nulos";

    const kiEntero = Math.floor(ki);
    if (ki !== kiEntero) {
      return res.status(500).json({ message: "El Ki tiene que ser entero" });
    }

    if (gender !== "Male" && gender !== "Female") {
      return res.status(400).json({ Message: "No esta definida la Raza y que ingresar un valor" });
    }

    if (typeof description !== "string") {
     return res.status(400).json({ Message: "La descripcion tiene que ser un tipo STRING" });
    }

    const nombreUnico = await Character.findOne({ where: { name } });
    if (nombreUnico !== null)
      return res.status(400).json({ Message: "El nombre tiene que ser Unico" });

    const character = await Character.create({ name, ki, race, gender, description });
    return res.status(201).json({ Message: "Se Creó el Personaje",character });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCharacter = async (req, res)=>{
//Se hace un trim a todos los datos que sean string
     if(req.body){
        for (let value in req.body){
            if(typeof req.body[value] === "string"){
                req.body[value] = req.body[value].trim();
            } 
        }
    }

    const {name, ki, race, gender, description} = req.body;

    try {
        //Validación para que el nombre de cada pj sea único
        if(name){
            const nameUnique = await Character.findOne({where: {name}});
            if(nameUnique) return res.status(400).json({errorMessage: "'name' must be unique per character"});
        }

        const [updated] = await Character.update({name, ki, race, gender, description}, {
            where: {id: req.params.id}
        });

        //Si la cantidad de filas afectadas es mayor a 0 entonces el personaje fue actualizado

        if(updated > 0) return res.status(200).json({Message: "Character has been updated"});

        //De otro modo, si no se actualizaron filas, el personaje no existe

        return res.status(404).json({errorMessage: "Character not found"})
    } catch (error) {
        res.status(500).json({Message: error.message});
    }
}
//

export const obtenerPersonajes = async (req, res) => {
  try {
    const personajes = await Character.findAll();

    if (personajes.length === 0)
      return res
        .status(400)
        .json({ Message: "No se encontró Ningun personaje" });

    return res.json(personajes);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};
//

export const obtenerPorID = async (req, res) => {
  try {
    const personaje = Character.findByPk(req.params.id);
    if (personaje) return res.status(201).json(personaje);

    return res.status(404).json({ message: "No se Encontró la ID" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const eliminarPersonaje = async (req, res) => {
  try {
    const personaje = Character.destroy(req.params.id);
    if (personaje)
      return res
        .status(400)
        .json({ message: "no se ha podido eliminar el personaje" });

    return res.status(201).json({ message: "Se Ha eliminado el personaje" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
