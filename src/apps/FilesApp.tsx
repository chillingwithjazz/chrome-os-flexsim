import React from 'react';
import { Folder, File, HardDrive, Download, Image, Music, Video as VideoIcon, Clock } from 'lucide-react';

export const FilesApp: React.FC = () => {
  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col py-2">
        <div className="px-4 py-2 text-xs font-semibold text-gray-500">Recent</div>
        <button className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-200 text-gray-700">
          <Clock size={18} className="text-gray-500" />
          <span className="text-sm">Recent</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-200 text-gray-700">
          <Image size={18} className="text-blue-500" />
          <span className="text-sm">Images</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-200 text-gray-700">
          <VideoIcon size={18} className="text-red-500" />
          <span className="text-sm">Videos</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-200 text-gray-700">
          <Music size={18} className="text-yellow-500" />
          <span className="text-sm">Audio</span>
        </button>

        <div className="px-4 py-2 text-xs font-semibold text-gray-500 mt-4">Files</div>
        <button className="flex items-center space-x-3 px-4 py-2 bg-blue-100 text-blue-700">
          <HardDrive size={18} className="text-blue-600" />
          <span className="text-sm font-medium">My files</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-200 text-gray-700 pl-8">
          <Download size={18} className="text-gray-500" />
          <span className="text-sm">Downloads</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-200 text-gray-700 pl-8">
          <Folder size={18} className="text-gray-500" />
          <span className="text-sm">Play files</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="h-14 border-b border-gray-200 flex items-center px-4">
          <h1 className="text-lg font-medium">My files</h1>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Folder size={48} className="text-blue-500 mb-2" />
              <span className="text-sm text-center">Downloads</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Folder size={48} className="text-blue-500 mb-2" />
              <span className="text-sm text-center">Play files</span>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg cursor-pointer">
              <File size={48} className="text-gray-400 mb-2" />
              <span className="text-sm text-center">Document.pdf</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
