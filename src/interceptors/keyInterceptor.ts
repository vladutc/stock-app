import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    return new Promise((resolve) => {      
      config.headers['x-rapidapi-host']='fidelity-investments.p.rapidapi.com';
      config.headers['x-rapidapi-key']='c8355eb86dmshe636a7e3aa281f4p10881djsn7681c0562d2a';
      resolve(config);
    });
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axios;
