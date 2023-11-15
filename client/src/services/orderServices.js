
// export const create = async (orderData) => {
//    const body = {
//       fullname: orderData.fullname,
//       address: orderData.address,
//       dayForDelivery: orderData.dayForDelivery,
//       timeForDelivery: orderData.timeForDelivery,
//       order:orderData.order

//    }

//    const responce = await fetch(`${baseUrl}`)
//   const result = await request.post(baseUrl, gameData);
//   return result;
// };
 const baseUrl = "http://localhost:5050/orders/order";


import * as request from "../lib/request";
//const baseUrl ='http://localhost:3030/jsonstore/games'
// export const getAll = async () => {
//   const result = await request.get(baseUrl);
//   console.log(result);
//   return Object.values(result);
// };

// export const getOne = async (gameId) => {
//   const result = await request.get(`${baseUrl}/${gameId}`);
//   return result;
// };

export const create = async (orderData) => {
  const result = await request.post(baseUrl, orderData);
  return result;
};