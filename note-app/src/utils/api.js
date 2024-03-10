import axios from 'axios';
export const prefixApi = "http://localhost:3344";
export const post = async (url, body) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(prefixApi + url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  if (response.data) return response.data;
};

export const get = async (url) => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(prefixApi + url, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  if (response.data) return response.data;
};
