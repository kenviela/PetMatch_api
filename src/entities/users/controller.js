const { db } = require("../../databases/index");

const userController = async (req, res) => {
  console.log("estoy dentro");
  try {
    const data = req.body;
    const user = await db("users").insert({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({ errorMessage: error.message });
  }
};
module.exports = { userController };
