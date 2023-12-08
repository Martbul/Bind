import * as request from '../lib/request'

 const baseUrl = 'http://localhost:5050/users'

 export const login = async (email, password) => {
   const result = await request.post(`${baseUrl}/login`, {
     email,
     password,
   });

   console.log(result);
   if (result === "invalid username!!!!!!!!! or password") {
     throw new Error();
   }
   //console.log(result);
   return result;
 };

export const register = async (username,email, password,) => 
    request.post(`${baseUrl}/singup`, {username,email,password})

export const logout = ( )=> request.get(`${baseUrl}/logout`)