import React, { useState } from 'react';
import { Plus, Search, CheckSquare, Image as ImageIcon, Mic, Edit3, RefreshCcw, Settings } from 'lucide-react';

export const KeepApp: React.FC = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Groceries', content: '- Milk\n- Eggs\n- Bread\n- Apples', color: 'bg-yellow-100' },
    { id: 2, title: 'Meeting Notes', content: 'Discuss Q3 goals and marketing strategy. Need to follow up with Sarah.', color: 'bg-blue-100' },
    { id: 3, title: 'Ideas', content: 'App for tracking plant watering schedule.', color: 'bg-green-100' },
    { id: 4, title: 'To Do', content: '1. Pay bills\n2. Call mom\n3. Schedule dentist appointment', color: 'bg-red-100' },
  ]);

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Keep_icon.svg" alt="Keep" className="w-8 h-8" referrerPolicy="no-referrer" />
          <span className="text-xl font-medium text-gray-700">Keep</span>
        </div>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-gray-100 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 shadow-sm transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><RefreshCcw size={20} /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><Settings size={20} /></button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">
        {/* Take a note input */}
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md border border-gray-200 p-3 flex items-center justify-between mb-8 cursor-text hover:shadow-lg transition-shadow">
          <span className="text-gray-500 font-medium ml-2">Take a note...</span>
          <div className="flex items-center space-x-1">
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><CheckSquare size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><Edit3 size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><ImageIcon size={20} /></button>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="w-full max-w-6xl columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {notes.map(note => (
            <div key={note.id} className={`${note.color} rounded-lg p-4 shadow-sm border border-black/5 hover:shadow-md transition-shadow cursor-pointer break-inside-avoid`}>
              {note.title && <h3 className="font-medium text-gray-900 mb-2">{note.title}</h3>}
              <p className="text-gray-800 whitespace-pre-wrap text-sm">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-gray-50 transition-colors border border-gray-200">
        <Plus size={24} />
      </button>
    </div>
  );
};
