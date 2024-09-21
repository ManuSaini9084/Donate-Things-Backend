import axios from 'axios';

const API_URL = 'http://localhost:5000/api/apparel';

export const submitApparel = async (data) => {
  const response = await axios.post(`${API_URL}/submit`, data);
  return response.data;
};

export const getApparels = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

// New function to delete apparel by ID
export const deleteApparel = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
