const Order = require("../models/order");

exports.getAll = async (search) => {
  let filterOrders = await Order.find().lean();

  // TODO: this will be filtered later with mongoose
  if (search) {
    filterOrders = filterOrders.filter((order) =>
      order.order.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filterOrders;
};
