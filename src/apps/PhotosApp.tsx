import React from 'react';
import { Search, Image as ImageIcon, Video, Share2, Trash2, Heart } from 'lucide-react';

const MOCK_PHOTOS = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682687982501-1e58f813f228?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682687982134-2ac563b2228b?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682687220067-dce37a5f85ea?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?q=80&w=2000&auto=format&fit=crop',
];

export const PhotosApp: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white text-gray-900">
      <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-medium text-gray-800">Photos</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search your photos" 
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Share2 size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Heart size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Today</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MOCK_PHOTOS.map((url, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden group relative cursor-pointer">
              <img src={url} alt={`Photo ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
