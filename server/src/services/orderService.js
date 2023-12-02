const Order = require("../models/order")


exports.create = async (orderData) => {
   const order = await Order.create(orderData)
   console.log(order);
   return order
}

// exports.delete = (bindId) => Order.findByIdAndDelete(bindId);