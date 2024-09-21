import axios from 'axios';

const API_URL = 'https://donate-backend-1.onrender.com/api/blog';

export const getBlogPosts = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

export const createBlogPost = async (data) => {
  const response = await axios.post(`${API_URL}/create`, data);
  return response.data;
};
