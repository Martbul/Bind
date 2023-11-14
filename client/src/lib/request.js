const buildOptions = (data) => {
  const options = {};
  if (data) {
    options.body = JSON.stringify(data);
    options.header = {
      "Content-Type": "application/json",
    };
     
  }
  return options;
};

const request = async (method, url, data) => {
   console.log({data});
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
   
  });
   
   if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
   }

  const result = await response.json();
  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
