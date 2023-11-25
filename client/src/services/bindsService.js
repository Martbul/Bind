import * as request from "../lib/request";
const baseUrl = "http://localhost:5050/binds/binds";

export const getAll = async (serach) => {
   console.log(serach);
   const result = await request.get(baseUrl);
   return result
}