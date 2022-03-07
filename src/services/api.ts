import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    throw error.response;
  },
);

export default api;
