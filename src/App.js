import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Blog from './components/Blog'; // Import the Blog component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/user-dashboard" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/register" 
          element={<Register onRegister={() => {}} />} 
        />
        <Route 
          path="/user-dashboard" 
          element={<UserDashboard />} 
        />
        <Route 
          path="/admin-dashboard" 
          element={<AdminDashboard />} 
        />
        <Route 
          path="/blog" 
          element={<Blog />} // Add the Blog route
        />
      </Routes>
    </Router>
  );
};

export default App;
