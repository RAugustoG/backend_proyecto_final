const express = require("express");
const { check } = require("express-validator");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controllers");
const validateFields = require("../utils/validateFields");

const router = express.Router();

// Obtener productos
router.get("/", getAllProducts);

// Crear producto
router.post(
  "/",
  [
    check("name")
      .notEmpty().withMessage("El nombre es obligatorio"),

    check("price")
      .notEmpty().withMessage("El precio es obligatorio")
      .isFloat({ min: 0 }).withMessage("El precio debe ser un número válido"),

    check("imagen")
      .notEmpty().withMessage("La imagen es obligatoria")
      .isURL().withMessage("La imagen debe ser una URL válida"),

    validateFields,
  ],
  createProduct
);

// Actualizar producto
router.put(
  "/:id",
  [
    check("id")
      .isMongoId().withMessage("ID de producto inválido"),

    check("price")
      .optional()
      .isFloat({ min: 0 }).withMessage("El precio debe ser válido"),

    validateFields,
  ],
  updateProduct
);

// Eliminar producto
router.delete(
  "/:id",
  [
    check("id")
      .isMongoId().withMessage("ID de producto inválido"),

    validateFields,
  ],
  deleteProduct
);

module.exports = router;