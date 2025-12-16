const { request } = require("express");
const productService = require("../services/products.services");

// Obtener todos los productos
const getAllProducts = async (request, response) => {
  try {
    const products = await productService.getAll();
    response.json(products);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Obtener producto por ID
const getProductById = async (request, response) => {
  try {
    const product = await productService.getById(request.params.id);

    if (!product) {
      return response.status(404).json({ message: "Producto no encontrado" });
    }

    response.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Crear producto
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

// Actualizar producto
const updateProduct = async (request, response) => {
  try {
    const updatedProduct = await productService.update(
      request.params.id,
      request.body
    );

    if (!updatedProduct) {
      return response.status(404).json({ message: "Producto no encontrado" });
    }

    response.json({
      message: "Producto actualizado correctamente",
      product: updatedProduct,
    });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

// Eliminar producto
const deleteProduct = async (request, response) => {
  try {
    const deletedProduct = await productService.remove(request.params.id);

    if (!deletedProduct) {
      return response.status(404).json({ message: "Producto no encontrado" });
    }

    response.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};