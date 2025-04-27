const router = require("express").Router();
const { userController } = require("./controller.js");
router.post("/", userController);
module.exports = router;
