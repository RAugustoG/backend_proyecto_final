const productService = require("../services/products.services");

const getAllProducts = async (request, response) => {
  try {
    const products = await productService.getAll();
    response.json(products);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createProduct = async (request, response) => {
  try {
    const newProduct = await productService.create(request.body);
    response.status(201).json({
      message: "Producto creado con éxito",
      product: newProduct,
    });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProducts, createProduct };
