const router = require("express").Router();
const { userController } = require("./controller.js");
router.post("/users", userController);
module.exports = router;
