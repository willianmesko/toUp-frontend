import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.toup.app',
});

export default api;
