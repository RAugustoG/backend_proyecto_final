const CartItem = require("../models/CartItem");

const getAll = () => CartItem.find();

const create = (data) => CartItem.create(data);

const update = (id, data) => CartItem.findByIdAndUpdate(id, data, { new: true });

const remove = (id) => CartItem.findByIdAndDelete(id);

module.exports = {
  getAll,
  create,
  update,
  remove,
};
