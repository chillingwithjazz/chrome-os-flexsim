import React from 'react';
import { Camera, Video, RefreshCcw } from 'lucide-react';

export const CameraApp: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black text-white relative">
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <span className="text-gray-500 flex flex-col items-center">
            <Camera size={48} className="mb-4 opacity-50" />
            Camera feed not available
          </span>
        </div>
        
        {/* Viewfinder grid */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
          <div className="border-r border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
          <div></div>
        </div>
      </div>
      
      <div className="h-24 bg-black flex items-center justify-around px-8">
        <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <RefreshCcw size={20} />
        </button>
        
        <button className="w-16 h-16 rounded-full border-4 border-white p-1 flex items-center justify-center hover:scale-105 transition-transform">
          <div className="w-full h-full bg-white rounded-full"></div>
        </button>
        
        <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Video size={20} />
        </button>
      </div>
    </div>
  );
};
