import axios from 'axios';

const API_URL = 'https://donate-backend-1ygj.onrender.com/api/auth';

const authService = {
  registerUser: async (data) => {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  },
  
  login: async (data) => { // Change here
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  }
};

export default authService; // Default export
