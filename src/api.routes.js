const router = require("express").Router();
const usersRouter = require("./entities/users/routes.js");
const petsRouter = require("./entities/pets/routes.js");
const loginRouter = require("./entities/login/routes.js");
router.use("/users", usersRouter);
router.use("/pets", petsRouter);
router.use("/login", loginRouter);
module.exports = router;
