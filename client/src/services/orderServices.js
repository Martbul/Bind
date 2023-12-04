const baseUrl = "http://localhost:5050/orders/order";

import * as request from "../lib/request";

export const create = async (orderData) => {
  const result = await request.post(baseUrl, orderData);

  return result;
};



