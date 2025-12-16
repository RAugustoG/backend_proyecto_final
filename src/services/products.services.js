const Product = require("../models/Product");

// Obtener todos los productos
const getAll = async () => {
  return await Product.find();
};

// Obtener producto por ID
const getById = async (id) => {
  return await Product.findById(id);
};

// Crear producto
const create = async (data) => {
  const product = new Product(data);
  return await product.save();
};

// Actualizar producto
const update = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar producto
const remove = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};