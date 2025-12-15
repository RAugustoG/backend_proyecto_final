const cartService = require("../services/cart.services");

// Obtener carrito completo
const getCart = async (request, response) => {
  try {
    const items = await cartService.getAll();
    response.json(items);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

// Agregar producto al carrito
const addToCart = async (request, response) => {
  try {
    const { productId, name, price, quantity } = request.body;

    // Verificar si ya existe
    const existing = (await cartService.getAll()).find(item => item.productId.toString() === productId);
    if (existing) {
      const updated = await cartService.update(existing._id, { quantity: existing.quantity + quantity });
      return response.json(updated);
    }

    const newItem = await cartService.create({ productId, name, price, quantity });
    response.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar cantidad
const updateQuantity = async (request, response) => {
  try {
    const { quantity } = request.body;
    const updated = await cartService.update(request.params.id, { quantity });
    response.json(updated);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

// Eliminar producto
const removeFromCart = async (request, response) => {
  try {
    await cartService.remove(request.params.id);
    response.json({ success: true });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

module.exports = { getCart, addToCart, updateQuantity, removeFromCart };