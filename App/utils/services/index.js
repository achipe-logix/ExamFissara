import axios from 'axios';

const client = axios.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => {
    const {data} = response;
    return data;
  },
  (error) => Promise.reject(error),
);

export default client;
