import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(async (config) => {
  config.baseURL = 'https://dung.awe7.com/';
  return config;
});

export { instance as axios };
