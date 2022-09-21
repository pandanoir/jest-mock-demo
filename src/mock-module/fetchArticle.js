// fetchArticle.ts
import axios from 'axios';

export const fetchArticle = (id) => {
  return axios.get(`/api/article/${id}`);
};
