import axios from "axios";

axios.defaults.baseURL = ""; // base url of the server
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const request = async ({ method, route, body }) => {
  try {
    const response = await axios.request({
      method, // => method: method,
      url: route,
      data: body,
    });

    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};
