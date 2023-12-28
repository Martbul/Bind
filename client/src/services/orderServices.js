const baseUrl = "http://localhost:5050/orders/order";

import * as request from "../lib/request";

export const updateUserOrder = async (orderData) => {
  console.log(orderData);
  const result = await request.post(baseUrl, orderData);

  return result;
};



