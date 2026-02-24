import React, { useState } from 'react';
import { Share, Undo, Redo, Printer, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type, Image as ImageIcon, LayoutTemplate, Play, Plus, Square } from 'lucide-react';

export const SlidesApp: React.FC = () => {
  const [slides, setSlides] = useState([{ id: 1, title: 'Click to add title', content: 'Click to add text' }]);
  const [activeSlide, setActiveSlide] = useState(1);
  const [presentationTitle, setPresentationTitle] = useState('Untitled presentation');

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-white flex items-center px-4 py-2 border-b border-gray-200">
        <div className="w-10 h-10 flex items-center justify-center mr-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg" alt="Slides" className="w-8 h-8" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col">
          <input 
            type="text" 
            value={presentationTitle}
            onChange={(e) => setPresentationTitle(e.target.value)}
            className="text-lg text-gray-800 border-none focus:outline-none focus:bg-gray-100 px-1 rounded hover:border-gray-300 border border-transparent w-64"
          />
          <div className="flex space-x-4 text-sm text-gray-600 mt-0.5">
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">File</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Edit</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">View</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Insert</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Format</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Slide</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Arrange</span>
            <span className="hover:bg-gray-100 px-1.5 py-0.5 rounded cursor-pointer">Tools</span>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors border border-gray-300">
            <Play size={18} />
            <span>Slideshow</span>
          </button>
          <button className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors">
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
          <button 
            className="p-1.5 hover:bg-gray-200 rounded text-gray-700 flex items-center justify-center" 
            onClick={() => setSlides([...slides, { id: Date.now(), title: 'New Slide', content: 'Add content here' }])}
          >
            <Plus size={18} />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Undo size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Redo size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Printer size={16} /></button>
        </div>
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 mr-2">
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Type size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><ImageIcon size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><Square size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><LayoutTemplate size={16} /></button>
        </div>
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 mr-2">
          <select className="text-sm border-none bg-transparent focus:ring-0 text-gray-700 cursor-pointer hover:bg-gray-200 rounded p-1 w-32">
            <option>Arial</option>
            <option>Google Sans</option>
            <option>Times New Roman</option>
          </select>
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          <div className="flex items-center">
            <button className="p-1 hover:bg-gray-200 rounded text-gray-700">-</button>
            <span className="px-2 text-sm border border-gray-300 rounded mx-1 bg-white">14</span>
            <button className="p-1 hover:bg-gray-200 rounded text-gray-700">+</button>
          </div>
        </div>
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 mr-2">
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold"><Bold size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic"><Italic size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 underline"><Underline size={16} /></button>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><AlignLeft size={16} /></button>
          <button className="p-1.5 bg-yellow-100 rounded text-yellow-800"><AlignCenter size={16} /></button>
          <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700"><AlignRight size={16} /></button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-white border-r border-gray-200 overflow-y-auto p-2 space-y-2">
          {slides.map((slide, idx) => (
            <div 
              key={slide.id}
              className={`flex items-start space-x-2 p-2 rounded cursor-pointer ${activeSlide === slide.id ? 'bg-yellow-50 ring-1 ring-yellow-400' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveSlide(slide.id)}
            >
              <span className="text-xs font-medium text-gray-500 mt-1">{idx + 1}</span>
              <div className="flex-1 aspect-video bg-white border border-gray-200 shadow-sm rounded flex flex-col items-center justify-center p-1">
                <div className="text-[8px] font-bold truncate w-full text-center">{slide.title}</div>
                <div className="text-[6px] text-gray-400 truncate w-full text-center mt-1">{slide.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Canvas */}
        <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-[#f8f9fa]">
          {slides.map(slide => slide.id === activeSlide && (
            <div key={slide.id} className="w-full max-w-4xl aspect-video bg-white shadow-md border border-gray-200 flex flex-col items-center justify-center p-12 text-center relative">
              <input 
                type="text"
                className="text-4xl font-bold mb-8 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500/20 border-transparent hover:border-gray-200 border border-dashed p-2 rounded"
                value={slide.title}
                onChange={(e) => {
                  setSlides(slides.map(s => s.id === slide.id ? { ...s, title: e.target.value } : s));
                }}
              />
              <textarea 
                className="text-xl text-gray-600 w-full h-32 text-center focus:outline-none focus:ring-2 focus:ring-blue-500/20 border-transparent hover:border-gray-200 border border-dashed p-2 rounded resize-none"
                value={slide.content}
                onChange={(e) => {
                  setSlides(slides.map(s => s.id === slide.id ? { ...s, content: e.target.value } : s));
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
