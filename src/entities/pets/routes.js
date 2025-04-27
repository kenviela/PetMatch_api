const router = require("express").Router();
const { petController } = require("./controller.js");
router.post("/", petController);
module.exports = router;
