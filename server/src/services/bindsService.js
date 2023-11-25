const Order = require("../models/order");

exports.getAll = async (search) => {
  console.log(search);
  let filterOrders = await Order.find().lean();

  if (search) {
    filterOrders = filterOrders.filter((order) =>
      order.order.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filterOrders;
};
