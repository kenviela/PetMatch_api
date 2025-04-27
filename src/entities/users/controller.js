const { db } = require("../../databases/index");
const bcrypt = require("bcryptjs");
const userController = async (req, res) => {
  console.log("estoy dentro");
  try {
    const data = req.body;

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const [userId] = await db("users").insert({
      id: data.id,
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("error", error);
    return res.json({ errorMessage: error.message });
  }
};
module.exports = { userController };
