import axios from 'axios';
import { key } from './Api-key';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  }
);

async function fetchImg(query, page, perPage) {
  const response = await axios.get(
    `?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
}

export { fetchImg };
