const express = require("express");
const { check } = require("express-validator");
const {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart,
} = require("../controllers/cart.controllers");
const validateFields = require("../utils/validateFields");

const router = express.Router();

// Obtener carrito
router.get("/", getCart);

// Agregar producto al carrito
router.post(
  "/",
  [
    check("productId")
      .notEmpty().withMessage("El productId es obligatorio")
      .isMongoId().withMessage("productId inválido"),

    check("name")
      .notEmpty().withMessage("El nombre es obligatorio"),

    check("price")
      .isFloat({ min: 0 }).withMessage("El precio debe ser válido"),

    check("quantity")
      .isInt({ min: 1 }).withMessage("La cantidad debe ser al menos 1"),

    validateFields,
  ],
  addToCart
);

// Actualizar cantidad
router.put(
  "/:id",
  [
    check("id")
      .isMongoId().withMessage("ID inválido"),

    check("quantity")
      .isInt({ min: 1 }).withMessage("La cantidad debe ser al menos 1"),

    validateFields,
  ],
  updateQuantity
);

// Eliminar producto
router.delete(
  "/:id",
  [
    check("id")
      .isMongoId().withMessage("ID inválido"),

    validateFields,
  ],
  removeFromCart
);

module.exports = router;