import React from 'react';
import { Search, Menu, Bell, User } from 'lucide-react';

export const PlayStoreApp: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center px-4 py-2 border-b border-gray-200 space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full"><Menu size={20} /></button>
        <div className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Google_Play_Store_icon_%282022%29.svg" alt="Play Store" className="w-6 h-6" referrerPolicy="no-referrer" />
          <span className="text-lg font-medium text-gray-700">Google Play</span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 focus-within:bg-white focus-within:shadow-md border border-transparent focus-within:border-gray-200 transition-all">
          <Search size={18} className="text-gray-500 mr-2" />
          <input type="text" placeholder="Search for apps & games" className="bg-transparent border-none focus:outline-none text-sm w-full" />
        </div>
        <div className="flex-1" />
        <button className="p-2 hover:bg-gray-100 rounded-full"><Bell size={20} /></button>
        <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-medium ml-2">
          U
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex space-x-6 mb-8 border-b border-gray-200">
            <button className="pb-3 border-b-2 border-green-500 text-green-600 font-medium text-sm px-2">For you</button>
            <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium text-sm px-2">Top charts</button>
            <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium text-sm px-2">Kids</button>
            <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium text-sm px-2">Premium</button>
            <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium text-sm px-2">Categories</button>
          </div>

          <h2 className="text-xl font-medium mb-4">Recommended for you</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex flex-col space-y-2 cursor-pointer group">
                <div className="aspect-square bg-gray-100 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow" />
                <div className="text-sm font-medium truncate">App Name {i}</div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-xs text-gray-500 flex items-center">4.{i} ★</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
