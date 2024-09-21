import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ onRegister }) => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.registerUser(userData);
      console.log('Registration successful:', response);
      toast.success("User Registered successfully!");
      onRegister(); // Call the register handler
      navigate('/login'); // Redirect to Login
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      toast.error("Registration failed. Please try again."); // Show error toast
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <ToastContainer />
      <div className="w-full max-w-md h-96 p-6 bg-white shadow-lg rounded-lg flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center mb-10">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border border-gray-400 rounded"
            value={userData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-400 rounded"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-400 rounded"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
