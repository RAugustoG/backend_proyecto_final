const express = require("express");
const { check } = require("express-validator");
const {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart ,
} = require("../controllers/cart.controllers");
const validateFields = require("../utils/validateFields");

const router = express.Router();

// Obtener todos los items del carrito
router.get("/", getCart);

// Agregar producto al carrito
router.post(
  "/",
  [
    check("productId").notEmpty().withMessage("El productId es obligatorio"),
    check("quantity").isInt({ min: 1 }).withMessage("La cantidad debe ser al menos 1"),
    validateFields,
  ],
  addToCart
);

// Actualizar cantidad de un item
router.put(
  "/:id",
  [
    check("quantity").isInt({ min: 1 }).withMessage("La cantidad debe ser al menos 1"),
    validateFields,
  ],
  updateQuantity
);

// Eliminar un item del carrito
router.delete("/:id", removeFromCart);

module.exports = router;
