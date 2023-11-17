const Order = require("../models/order")


exports.create = async (orderData) => {
   const order = await Order.create(orderData)
   return order
}

exports.getSingleOrder = (id) => Order.findById(id)