const router = require("express").Router();
const { loginController } = require("./controller.js");
router.post("/", loginController);
module.exports = router;
