const Product = require("../models/Product");

const getAll = async () => {
  return await Product.find();
};

const create = async (data) => {
  const product = new Product(data);
  return await product.save();
};

module.exports = { getAll, create };