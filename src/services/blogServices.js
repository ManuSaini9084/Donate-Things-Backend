import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blog';

export const getBlogPosts = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

export const createBlogPost = async (data) => {
  const response = await axios.post(`${API_URL}/create`, data);
  return response.data;
};
