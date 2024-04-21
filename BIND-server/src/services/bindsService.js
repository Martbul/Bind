const Product = require("../models/Product");
const User = require("../models/User");
exports.getAll = async () => {
  const binds = await Product.find().lean();

  return binds;
};


exports.getSingleBind = (id) => Product.findById(id);


exports.update = (userId, bindData) =>

  User.findByIdAndUpdate(userId, bindData);


exports.delete = (bindId) => Order.findByIdAndDelete(bindId);

