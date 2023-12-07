const Order = require("../models/order")


exports.create = async (orderData) => {
   orderData.likes = 0
   orderData.likedBy = Array
   const order = await Order.create(orderData)
   console.log(order);
   return order
}



