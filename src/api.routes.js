const router = require("express").Router();
const { userController } = require("./entities/users/controller.js");
const { petController } = require("./entities/pets/controller.js");
const { loginController } = require("./entities/login/controller.js");
router.post("/users", userController);
router.post("/pets", petController);
router.post("/login", loginController);
module.exports = router;
