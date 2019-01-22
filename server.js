const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
const itemRoutes = require("./routes/api/items");

const app = express();

// body parser middleware
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log("DB Connected...!"))
  .catch(err => console.error(err));

app.use("/api/items", itemRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
