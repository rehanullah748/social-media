const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const routes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();
const app = express();
const port = 5000;
connect();
// apply middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api", routes);
app.use("/api", postRoutes);
app.listen(port, () => {
  console.log(`you are on port: ${port}`);
});
