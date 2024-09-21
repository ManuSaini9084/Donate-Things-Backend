import React from 'react';
import ApparelForm from './ApparelForm';
import ApparelList from './ApparelList';

const UserDashboard = () => {
  return (
    <div className="container mx-auto p-6">
    <h1 className="relative group text-4xl font-bold text-center mb-8 cursor-pointer hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
  User Dashboard
  <span className="absolute left-1/3 right-0 -mb-3 bottom-0 w-1/3 h-[3px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col mt-8">
          <ApparelForm />
        </div>
        <div className="flex flex-col">
          <ApparelList />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
