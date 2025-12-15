const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  descripcion: { type: String },
  price: { type: Number, required: true },
  imagen: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);