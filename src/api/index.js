import axios from 'axios';
import { stringify } from 'query-string';
import { baseURL } from '../config';

const req = axios.create();

req.defaults.baseURL = baseURL;

req.defaults.raxConfig = {
  instance: req,
};

req.interceptors.request.use(config => ({
  ...config,
  data: stringify(config.data),
}));

const gallery = {
  getPhotos({ page = 1 }) {
    return req.get(`/photos?page=${page}`).then(res => res.data);
  },
};

const Api = {
  gallery,
};

export default Api;
