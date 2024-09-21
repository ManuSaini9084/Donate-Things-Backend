import React, { useEffect, useState } from 'react';
import { getApparels, deleteApparel } from '../services/apparelService';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [apparelList, setApparelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchApparels = async () => {
      try {
        const data = await getApparels();
        setApparelList(data);
      } catch (error) {
        console.error('Error fetching apparels:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchApparels();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      await deleteApparel(id);
      setApparelList(apparelList.filter(apparel => apparel._id !== id));
      toast.success("Apparel deleted successfully!");
    } catch (error) {
      console.error('Failed to delete apparel:', error);
      toast.error("Failed to delete apparel.");
    }
  };

  const filteredApparels = apparelList.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="relative group text-3xl font-bold mb-4 text-center cursor-pointer">
        Admin Dashboard
        <span className="absolute left-1/3 right-0 -mb-3 bottom-0 w-1/3 h-[3px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </h1>
      <h2 className="relative group text-2xl mb-4 text-center cursor-pointer">
        Apparel List
        <span className="absolute left-1/3 right-0 -mb-3 bottom-0 w-1/3 h-[3px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </h2>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <ul className="space-y-4">
          {filteredApparels.map((item) => (
            <li key={item._id} className="flex items-start p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold">{item.category}</h3>
                <p>{item.description}</p>
                <p className="text-gray-500">{item.location}</p>
                <button 
                  onClick={() => handleDelete(item._id)} 
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 mt-2 transition duration-300"
                >
                  Delete
                </button>
              </div>
              {item.imageUrl && (
                <img 
                  src={`https://donate-backend-1ygj.onrender.com${item.imageUrl}`} 
                  alt={item.description} 
                  className="w-32 h-32 object-cover rounded" 
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
