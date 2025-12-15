const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB conectada"))
  .catch((err) => console.error("Error DB:", err));
