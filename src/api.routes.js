const router = require("express").Router();
const { userController } = require("./entities/users/controller.js");
const { petController } = require("./entities/pets/controller.js");
router.post("/users", userController);
router.post("/pets", petController);
module.exports = router;
