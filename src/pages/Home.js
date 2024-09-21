import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-400 to-blue-500 p-6 text-white">
      <motion.h1
        className="text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Make a Difference with Your Apparel
      </motion.h1>
      
      <motion.p
        className="text-xl text-center mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Turn your unused or worn-out clothes into a positive impact by donating, recycling, or disposing of them responsibly. Join our community and be part of the change!
      </motion.p>

      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link 
          to="/user-dashboard" 
          className="bg-blue-700 text-white px-10 py-4 text-lg rounded-lg shadow-lg hover:bg-blue-800 transition duration-200"
        >
          Donate Apparel
        </Link>
      </motion.div>

      <motion.h2
        className="text-4xl font-bold mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        How It Works
      </motion.h2>

      <motion.div
        className="flex justify-center mt-6 space-x-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xs flex flex-col items-center">
          <h3 className="text-2xl font-bold">Step 1</h3>
          <p className="mt-2">Register or Login</p>
          <p>Create an account or log in to start donating.</p>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xs flex flex-col items-center">
          <h3 className="text-2xl font-bold">Step 2</h3>
          <p className="mt-2">Submit Apparel Details</p>
          <p>Provide details about the apparel you wish to donate.</p>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xs flex flex-col items-center">
          <h3 className="text-2xl font-bold">Step 3</h3>
          <p className="mt-2">Manage Your Donations</p>
          <p>Track and manage your donations through your dashboard.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
