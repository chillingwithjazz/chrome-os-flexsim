import React from 'react';
import { Video, Mic, Monitor, Phone, Settings, MessageSquare, Users, MoreVertical } from 'lucide-react';

export const MeetApp: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#202124] text-white font-sans">
      {/* Header */}
      <div className="h-12 flex items-center justify-between px-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium">Weekly Sync</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-700 rounded-full text-gray-300 transition-colors">
            <Users size={20} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full text-gray-300 transition-colors">
            <MessageSquare size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex p-4 space-x-4 overflow-hidden">
        {/* Main Video Area */}
        <div className="flex-1 bg-[#3c4043] rounded-xl overflow-hidden relative flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
            Sarah Jenkins
          </div>
          <div className="absolute top-4 right-4 bg-blue-500 p-1.5 rounded-full">
            <Mic size={16} className="text-white" />
          </div>
        </div>

        {/* Sidebar Videos */}
        <div className="w-64 flex flex-col space-y-4 overflow-y-auto">
          <div className="h-40 bg-[#3c4043] rounded-xl overflow-hidden relative flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-0.5 rounded text-xs backdrop-blur-sm">
              David Chen
            </div>
          </div>
          <div className="h-40 bg-[#3c4043] rounded-xl overflow-hidden relative flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-0.5 rounded text-xs backdrop-blur-sm">
              Emily Rodriguez
            </div>
          </div>
          <div className="h-40 bg-[#3c4043] rounded-xl overflow-hidden relative flex items-center justify-center border-2 border-blue-500">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-medium">
              You
            </div>
            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-0.5 rounded text-xs backdrop-blur-sm">
              You
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="h-20 bg-[#202124] flex items-center justify-center space-x-4 px-6 border-t border-gray-700">
        <button className="w-12 h-12 rounded-full bg-[#3c4043] flex items-center justify-center hover:bg-gray-600 transition-colors">
          <Mic size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-[#3c4043] flex items-center justify-center hover:bg-gray-600 transition-colors">
          <Video size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-[#3c4043] flex items-center justify-center hover:bg-gray-600 transition-colors">
          <Monitor size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-[#3c4043] flex items-center justify-center hover:bg-gray-600 transition-colors">
          <MoreVertical size={20} />
        </button>
        <button className="w-16 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors ml-4">
          <Phone size={24} className="rotate-[135deg]" />
        </button>
      </div>
    </div>
  );
};
