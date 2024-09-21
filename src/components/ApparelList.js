import React, { useEffect, useState } from 'react';
import { getApparels } from '../services/apparelService';

const ApparelList = () => {
  const [apparelList, setApparelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchApparel = async () => {
      try {
        const data = await getApparels();
        setApparelList(data);
      } catch (error) {
        console.error('Error fetching apparel:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchApparel();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Placeholder while loading
  }

  return (
    <div className="bg-white p-8 shadow-md rounded-lg border-2 border-gray-400 mt-8">
      <h2 className="relative group text-3xl font-bold mb-6 text-center cursor-pointer">
        Apparel List
        <span className="absolute left-1/3 right-0 -mb-3 bottom-0 w-1/3 h-[3px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </h2>
      <ul className="space-y-6">
        {apparelList.map((item) => (
          <li key={item._id} className="p-6 border rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row items-center">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-semibold mb-2">{item.category}</h3>
              <p className="mb-4">{item.description}</p>
              <p className="text-gray-600 mb-4">{item.location}</p>
            </div>
            {item.imageUrl && (
              <img 
                src={`${baseURL}${item.imageUrl}`} 
                alt={item.category} 
                className="w-32 h-32 object-cover rounded-lg md:w-48 md:h-48"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApparelList;
