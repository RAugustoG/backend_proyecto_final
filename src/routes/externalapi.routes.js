const express = require("express");

const router = express.Router();

// Catálogo externo de productos
router.get("/external-products", async (request, response) => {
  try {
    const fetchResponse = await fetch("https://fakestoreapi.com/products");
    const externalProducts = await fetchResponse.json();

    // Adapto los datos a nuestro modelo
    const adaptedProducts = externalProducts.map((product) => ({
      name: product.title,
      descripcion: product.description,
      price: product.price,
      imagen: product.image,
      external: true,
    }));

    response.json({
      source: "Fake Store API",
      total: adaptedProducts.length,
      products: adaptedProducts,
    });
  } catch (error) {
    response.status(500).json({
      message: "Error al consumir API externa",
    });
  }
});

module.exports = router;