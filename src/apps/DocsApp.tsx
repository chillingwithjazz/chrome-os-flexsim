import React, { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type, FileText, Download, Share, Printer, Undo, Redo } from 'lucide-react';

export const DocsApp: React.FC = () => {
  const [content, setContent] = useState('Welcome to Google Docs.\n\nStart typing here...');
  const [title, setTitle] = useState('Untitled document');

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-white flex items-center px-4 py-2 border-b border-gray-200">
        <div className="w-10 h-10 flex items-center justify-center mr-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg" alt="Docs" className="w-8 h-8" referrerPolicy="no-referrer" />
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
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Tools</span>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <button className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors">
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
            <option>Normal text</option>
            <option>Title</option>
            <option>Subtitle</option>
            <option>Heading 1</option>
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
            <span className="px-2 text-sm border border-gray-300 rounded mx-1 bg-white">11</span>
            <button className="p-1 hover:bg-gray-200 rounded text-gray-700">+</button>
          </div>
        </div>
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 mr-2">
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold"><Bold size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic"><Italic size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 underline"><Underline size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-blue-600"><Type size={16} /></button>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-1.5 bg-blue-100 rounded text-blue-700"><AlignLeft size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><AlignCenter size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><AlignRight size={16} /></button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-auto p-4 flex justify-center bg-[#f8f9fa]">
        <textarea
          className="w-full max-w-[816px] h-[1056px] bg-white shadow-md border border-gray-200 p-24 focus:outline-none resize-none text-gray-800"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '11pt', lineHeight: '1.5' }}
        />
      </div>
    </div>
  );
};
