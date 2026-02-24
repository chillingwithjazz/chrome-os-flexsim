import React, { useState } from 'react';
import { Share, Undo, Redo, Printer, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type } from 'lucide-react';

export const SheetsApp: React.FC = () => {
  const rows = 50;
  const cols = 26;
  
  const [data, setData] = useState<Record<string, string>>({});
  const [title, setTitle] = useState('Untitled spreadsheet');

  const handleChange = (r: number, c: number, value: string) => {
    setData(prev => ({ ...prev, [`${r}-${c}`]: value }));
  };

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-white flex items-center px-4 py-2 border-b border-gray-200">
        <div className="w-10 h-10 flex items-center justify-center mr-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" alt="Sheets" className="w-8 h-8" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col">
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg text-gray-800 border-none focus:outline-none focus:bg-gray-100 px-1 rounded hover:border-gray-300 border border-transparent w-64"
          />
          <div className="flex space-x-4 text-sm text-gray-600 mt-0.5">
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">File</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Edit</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">View</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Insert</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Format</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Data</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Tools</span>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <button className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors">
            <Share size={18} />
            <span>Share</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-medium">
            U
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#edf2fa] rounded-full mx-4 mt-2 mb-2 px-4 py-1.5 flex items-center space-x-1 shadow-sm">
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 mr-2">
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Undo size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Redo size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Printer size={16} /></button>
        </div>
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 mr-2">
          <select className="text-sm border-none bg-transparent focus:ring-0 text-gray-700 cursor-pointer hover:bg-gray-200 rounded p-1 w-24">
            <option>100%</option>
            <option>75%</option>
            <option>50%</option>
          </select>
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          <select className="text-sm border-none bg-transparent focus:ring-0 text-gray-700 cursor-pointer hover:bg-gray-200 rounded p-1 w-32">
            <option>Arial</option>
            <option>Google Sans</option>
            <option>Times New Roman</option>
            <option>Courier New</option>
          </select>
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          <div className="flex items-center">
            <button className="p-1 hover:bg-gray-200 rounded text-gray-700">-</button>
            <span className="px-2 text-sm border border-gray-300 rounded mx-1 bg-white">10</span>
            <button className="p-1 hover:bg-gray-200 rounded text-gray-700">+</button>
          </div>
        </div>
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 mr-2">
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold"><Bold size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic"><Italic size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 underline"><Underline size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-green-700"><Type size={16} /></button>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-1.5 bg-green-100 rounded text-green-800"><AlignLeft size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><AlignCenter size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><AlignRight size={16} /></button>
        </div>
      </div>

      {/* Formula Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-1 flex items-center space-x-2 shadow-sm z-10">
        <div className="text-sm font-medium text-gray-500 px-2 italic font-serif">fx</div>
        <div className="w-px h-4 bg-gray-300 mx-1"></div>
        <input 
          type="text" 
          className="flex-1 bg-transparent border-none px-2 py-1 text-sm focus:outline-none"
          placeholder=""
        />
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-auto relative bg-white">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="bg-gray-100 border border-gray-300 w-10 sticky top-0 left-0 z-20 shadow-[1px_1px_0_#e5e7eb]"></th>
              {Array.from({ length: cols }).map((_, i) => (
                <th key={i} className="bg-gray-100 border border-gray-300 min-w-[100px] font-normal text-sm text-gray-600 sticky top-0 z-10 shadow-[0_1px_0_#e5e7eb]">
                  {String.fromCharCode(65 + i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, r) => (
              <tr key={r}>
                <td className="bg-gray-100 border border-gray-300 text-center text-sm text-gray-600 sticky left-0 z-10 shadow-[1px_0_0_#e5e7eb]">
                  {r + 1}
                </td>
                {Array.from({ length: cols }).map((_, c) => (
                  <td key={c} className="border border-gray-300 p-0 relative">
                    <input
                      type="text"
                      className="w-full h-full px-1.5 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 absolute inset-0 bg-transparent"
                      value={data[`${r}-${c}`] || ''}
                      onChange={(e) => handleChange(r, c, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
