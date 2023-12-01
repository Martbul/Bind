import * as request from "../lib/request";
const baseUrl = "http://localhost:5050/binds/binds";

export const getAll = async () => {
  
   const result = await request.get(baseUrl);
   return result
}

export const getOne = async (bindId) => {
   //console.log(bindId);
  const result = await request.get(`${baseUrl}/${bindId}`);
  

  return result;
};



//! export za namirane na porycha za profile page
// export const getOneByUserEmail = async (userEmail) => {
//    const user =
// }


export const edit = async (bindId, bindData) => {
  const result = await request.put(`${baseUrl}/${bindId}`, bindData);

  return result;
};



export const remove = async (bindId) => request.remove(`${baseUrl}/${bindId}`);