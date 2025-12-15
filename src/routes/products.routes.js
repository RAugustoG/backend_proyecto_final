const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);

module.exports = router;
