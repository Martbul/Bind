const baseUrl = "http://localhost:5050/orders";

import * as request from "../lib/request";

export const updateUserOrder = async (orderData) => {
  console.log(orderData);
  const result = await request.post(baseUrl+"/order", orderData);

  return result;
};

export const setDatAndTime = async (orderData) => {
  console.log(orderData);
  const result = await request.post(baseUrl+'/setDayAndTime', orderData);

  return result;
};





