const { db } = require("../../databases/index.js");

const petController = async (req, res) => {
  console.log("estoy dentro");
  try {
    const data = req.body;
    const pet = await db("pets").insert({
      id: data.id,
      name: data.name,
      age: data.age,
      species: data.species,
      breed: data.breed,
      description: data.description,
    });
    return res.status(201).json({ message: "pet created successfully" });
  } catch (error) {
    console.log("error", error);
    return res.json({ errorMessage: error.message });
  }
};

const getController = async (req, res) => {
  try {
    const pets = await db("pets").select("*");
    return res.status(200).json(pets);
  } catch (error) {
    console.error("Error al obtener mascotas:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
const updateController = async (req, res) => {
  const petId = req.params.id; // Obtener el ID de la mascota desde los parámetros de la URL
  const petData = req.body; // Los nuevos datos de la mascota
  try {
    // Buscar la mascota en la base de datos
    const pet = await db("pets").where("id", petId).first();

    if (!pet) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    // Actualizar los datos de la mascota
    const updatedData = {
      name: petData.name || pet.name, // Si no se pasa 'name', se deja el actual
      age: petData.age || pet.age, // Lo mismo para 'age' y 'breed'
      breed: petData.breed || pet.breed,
    };

    // Actualizar la mascota en la base de datos
    await db("pets").where("id", petId).update(updatedData);

    // Responder con la mascota actualizada
    return res.status(200).json(updatedData);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Hubo un error al actualizar la mascota" });
  }
};

const deleteController = async (req, res) => {
  try {
    // Verifica si el usuario tiene el rol admin
    if (req.user.role !== "administrator") {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }

    console.log("estoy dentro de eliminar mascota");
    const { id } = req.params; // Recibe el ID de la mascota desde la URL

    // Elimina la mascota de la base de datos
    const deleted = await db("pets").where({ id }).del();

    if (deleted) {
      return res
        .status(200)
        .json({ message: `Pet with id ${id} deleted successfully` });
    } else {
      return res.status(404).json({ message: "Pet not found" });
    }
  } catch (error) {
    console.log("Error al eliminar mascota", error);
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = {
  petController,
  deleteController,
  updateController,
  getController,
};
