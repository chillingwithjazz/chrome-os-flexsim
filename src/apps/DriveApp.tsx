import React from 'react';
import { Search, Plus, Folder, FileText, Image as ImageIcon, FileSpreadsheet, FileIcon, MoreVertical } from 'lucide-react';

export const DriveApp: React.FC = () => {
  const files = [
    { name: 'Project Proposal', type: 'doc', date: 'Oct 24, 2023', size: '1.2 MB' },
    { name: 'Q3 Financials', type: 'sheet', date: 'Oct 20, 2023', size: '3.4 MB' },
    { name: 'Marketing Assets', type: 'folder', date: 'Oct 15, 2023', size: '--' },
    { name: 'Logo Design', type: 'image', date: 'Oct 10, 2023', size: '5.1 MB' },
    { name: 'Client Presentation', type: 'slide', date: 'Oct 5, 2023', size: '12.5 MB' },
    { name: 'Meeting Notes', type: 'doc', date: 'Sep 28, 2023', size: '0.5 MB' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'folder': return <Folder className="text-gray-500" size={24} />;
      case 'doc': return <FileText className="text-blue-500" size={24} />;
      case 'sheet': return <FileSpreadsheet className="text-green-500" size={24} />;
      case 'image': return <ImageIcon className="text-red-500" size={24} />;
      default: return <FileIcon className="text-gray-500" size={24} />;
    }
  };

  return (
    <div className="flex h-full bg-white text-gray-800 font-sans">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col p-4 space-y-4">
        <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-3 shadow-sm hover:bg-gray-50 transition-colors w-max">
          <Plus size={24} className="text-blue-600" />
          <span className="font-medium text-gray-700">New</span>
        </button>
        
        <nav className="flex flex-col space-y-1 mt-4">
          <a href="#" className="flex items-center space-x-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-r-full font-medium">
            <Folder size={20} />
            <span>My Drive</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
            <FileIcon size={20} />
            <span>Computers</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
            <FileText size={20} />
            <span>Shared with me</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
            <ImageIcon size={20} />
            <span>Recent</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
            <FileSpreadsheet size={20} />
            <span>Starred</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 border-b border-gray-200 flex items-center px-6 justify-between">
          <div className="relative w-full max-w-2xl">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search in Drive" 
              className="w-full bg-gray-100 rounded-full py-2 pl-12 pr-4 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* File List */}
        <div className="flex-1 overflow-y-auto p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Suggested</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {files.slice(0, 3).map((file, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 flex flex-col hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center space-x-3 mb-4">
                  {getIcon(file.type)}
                  <span className="font-medium text-gray-700 truncate">{file.name}</span>
                </div>
                <div className="text-xs text-gray-500 mt-auto">You edited • {file.date}</div>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-medium text-gray-800 mb-4">Files</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-sm text-gray-600">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Owner</th>
                  <th className="px-6 py-3 font-medium">Last modified</th>
                  <th className="px-6 py-3 font-medium">File size</th>
                  <th className="px-6 py-3 font-medium w-10"></th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-3 flex items-center space-x-3">
                      {getIcon(file.type)}
                      <span className="font-medium text-gray-700">{file.name}</span>
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">me</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{file.date}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{file.size}</td>
                    <td className="px-6 py-3">
                      <button className="p-1 hover:bg-gray-200 rounded-full text-gray-500">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
