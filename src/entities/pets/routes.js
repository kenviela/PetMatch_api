const router = require("express").Router();
const { userController } = require("./controller.js");
router.post("/pets", userController);
module.exports = router;
