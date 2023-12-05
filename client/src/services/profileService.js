import * as request from "../lib/request";

const baseUrl = "http://localhost:5050/profile"

export const getProfileData = async (email) => {
  
  const result = await request.post(baseUrl, {email});
  
  //console.log(result);
  return result;
};

export const edit = async (email, profileDetails) => {
  const result = await request.put(`${baseUrl}/${email}`, profileDetails);
console.log(result);
  return result;
};

