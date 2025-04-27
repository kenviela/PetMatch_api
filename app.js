const express = require("express");
require("dotenv").config();
const app = express();
const port = 3001;
const apiRoutes = require("./src/api.routes");
const cors = require("cors");
app.use(express.json()); // Used to parse JSON bodies
app.use(cors());
app.use(express.urlencoded());
app.use("/api", apiRoutes);
app.get("/", async (request, response) => {
  response.json("todo bien");
});

app.listen(port, async () => {
  console.log("todo bien");
});
