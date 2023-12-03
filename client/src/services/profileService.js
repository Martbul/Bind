import * as request from "../lib/request";
const baseUrl = "http://localhost:5050/binds/binds";

export const getProfileData = async (email) => {
  const result = await request.post(baseUrl, email);
  console.log(result);
  return result;
};