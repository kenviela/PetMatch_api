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

module.exports = { petController };
