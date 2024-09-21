import React, { useState } from 'react';
import { submitApparel } from '../services/apparelService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApparelForm = () => {
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', category === 'Others' ? customCategory : category);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('image', image);

    try {
      await submitApparel(formData);
      
      // Show success toast
      toast.success("Apparel submitted successfully!");

      // Clear the form
      setCategory('');
      setCustomCategory('');
      setDescription('');
      setLocation('');
      setImage(null);
      window.location.reload();
    } catch (error) {
      toast.error("Failed to submit apparel.");
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md border-2 border-gray-400 rounded-lg">
        <h2 className="relative group text-3xl font-bold mb-6 text-center cursor-pointer">
          Submit Apparel
          <span className="absolute left-1/3 right-0 -mb-3 bottom-0 w-1/3 h-[3px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </h2>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="Clothes">Clothes</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Bags">Bags</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {category === 'Others' && (
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">Custom Category</label>
            <input
              type="text"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
        )}

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-3 border rounded-lg"
            accept="image/*"
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </>
  );
};

export default ApparelForm;
