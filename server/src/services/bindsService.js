const Order = require("../models/order");

exports.getAll = async () => {
  const binds = await Order.find().lean();

  return binds;
};


exports.getSingleBind = (id) => Order.findById(id);


exports.update = (bindId, bindData) =>
  
  Order.findByIdAndUpdate(bindId, bindData);


exports.delete = (bindId) => Order.findByIdAndDelete(bindId);