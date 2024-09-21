import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(credentials);
      console.log('Login successful:', response);
      toast.success("User logged in successfully!");
      onLogin();
      navigate('/user-dashboard');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-full max-w-md h-96 p-6 bg-white shadow-md rounded-lg flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-10 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-400 rounded"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-400 rounded"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
