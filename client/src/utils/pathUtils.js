export const pathToUrl = (path, params) => {
  console.log(path);
  console.log(params.userOrderId);
const url = path.replace(":bindId", params.userOrderId);

   console.log(url);
  return url;
};
