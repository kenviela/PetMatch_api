const router = require("express").Router();
const {
  petController,
  deleteController,
  updateController,
  getController,
} = require("./controller.js");
const { authMiddleware } = require("../../middlewares/authMiddleware.js");
router.get("/", getController); // Obtener todas las mascotas
router.post("/", authMiddleware, petController); //crear una mascota
router.delete("/:id", authMiddleware, deleteController); // Eliminar una mascota por ID
router.put("/:id", authMiddleware, updateController); // Actualizar una mascota por ID
module.exports = router;
