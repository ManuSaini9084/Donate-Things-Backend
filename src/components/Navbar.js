import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="bg-blue-400 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-8">
          {['/', '/User-dashboard', '/Admin-dashboard', '/Blog'].map((path, index) => (
            <li key={index} className="relative group">
              <Link
                to={path}
                className="relative text-lg font-semibold text-black transition duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              >
                {path === '/' ? 'Home' : path.slice(1).replace('-', ' ')}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4">
          {!isAuthenticated ? (
            <>
              <li className="relative group">
                <Link
                  to="/login"
                  className="relative text-lg font-semibold text-white transition duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Login
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
              <li className="relative group">
                <Link
                  to="/register"
                  className="relative text-lg font-semibold text-white transition duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Register
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={onLogout}
                className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
