import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home, Star, MoreVertical, Shield, Search, Mic, Camera, X, Plus } from 'lucide-react';

export const ChromeApp: React.FC = () => {
  const [url, setUrl] = useState('https://google.com');
  const [inputUrl, setInputUrl] = useState('google.com');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setInputUrl(`google.com/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chrome Tabs */}
      <div className="flex items-end px-2 pt-2 bg-[#dee1e6] space-x-1">
        <div className="flex items-center space-x-2 bg-white px-4 py-1.5 rounded-t-lg max-w-[240px] w-full shadow-sm">
          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">G</div>
          <span className="text-xs truncate flex-1">{isSearching ? `${searchQuery} - Google Search` : 'Google'}</span>
          <button className="hover:bg-gray-200 rounded-full p-0.5"><X size={12} /></button>
        </div>
        <button className="p-1.5 hover:bg-gray-300 rounded-full mb-1"><Plus size={16} /></button>
      </div>

      {/* Chrome Toolbar */}
      <div className="flex items-center px-2 py-1.5 bg-white border-b border-gray-300 space-x-2">
        <button 
          className="p-1.5 hover:bg-gray-100 rounded-full text-gray-600"
          onClick={() => {
            setIsSearching(false);
            setSearchQuery('');
            setInputUrl('google.com');
          }}
        >
          <ArrowLeft size={16} />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400"><ArrowRight size={16} /></button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full text-gray-600"><RotateCw size={16} /></button>
        <button 
          className="p-1.5 hover:bg-gray-100 rounded-full text-gray-600"
          onClick={() => {
            setIsSearching(false);
            setSearchQuery('');
            setInputUrl('google.com');
          }}
        >
          <Home size={16} />
        </button>
        
        <div className="flex-1 flex items-center bg-gray-100 rounded-full px-3 py-1 border border-transparent focus-within:border-blue-500 focus-within:bg-white">
          <Shield size={14} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            className="flex-1 bg-transparent border-none focus:outline-none text-sm"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setUrl(inputUrl);
              }
            }}
          />
          <Star size={14} className="text-gray-500 ml-2" />
        </div>

        <button className="p-1.5 hover:bg-gray-100 rounded-full text-gray-600"><MoreVertical size={16} /></button>
      </div>

      {/* Browser Content */}
      <div className="flex-1 overflow-auto bg-white flex flex-col items-center pt-16">
        {!isSearching ? (
          <div className="flex flex-col items-center w-full max-w-2xl px-4">
            <h1 className="text-7xl font-bold mb-8">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </h1>
            
            <div className="w-full flex items-center bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-full px-4 py-3 mb-8 focus-within:shadow-md">
              <Search size={20} className="text-gray-400 mr-3" />
              <input 
                type="text" 
                className="flex-1 border-none focus:outline-none text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                placeholder="Search Google or type a URL"
              />
              <Mic size={20} className="text-blue-500 ml-3" />
              <Camera size={20} className="text-blue-500 ml-3" />
            </div>

            <div className="flex space-x-4">
              <button onClick={handleSearch} className="bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 text-sm px-4 py-2 rounded">Google Search</button>
              <button className="bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 text-sm px-4 py-2 rounded">I'm Feeling Lucky</button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-start px-8">
            <div className="w-full flex items-center border-b border-gray-200 pb-4 mb-4">
              <h1 className="text-3xl font-bold mr-8">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </h1>
              <div className="flex-1 max-w-2xl flex items-center bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-full px-4 py-2 focus-within:shadow-md">
                <input 
                  type="text" 
                  className="flex-1 border-none focus:outline-none text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <X size={20} className="text-gray-400 mr-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                <div className="w-px h-6 bg-gray-300 mr-3"></div>
                <Mic size={20} className="text-blue-500 mr-3 cursor-pointer" />
                <Search size={20} className="text-blue-500 cursor-pointer" onClick={handleSearch} />
              </div>
            </div>
            
            <div className="w-full max-w-2xl text-left ml-32">
              <div className="text-sm text-gray-500 mb-4">About 1,230,000,000 results (0.42 seconds)</div>
              
              <div className="mb-8">
                <div className="text-sm text-gray-800 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">W</div>
                  <span>https://en.wikipedia.org › wiki › {searchQuery}</span>
                </div>
                <div className="text-xl text-blue-600 hover:underline cursor-pointer mt-1">{searchQuery} - Wikipedia</div>
                <div className="text-sm text-gray-600 mt-1">
                  Information about {searchQuery} from Wikipedia, the free encyclopedia. Find out more about its history, origins, and related topics.
                </div>
              </div>
              
              <div className="mb-8">
                <div className="text-sm text-gray-800 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">G</div>
                  <span>https://www.google.com › search</span>
                </div>
                <div className="text-xl text-blue-600 hover:underline cursor-pointer mt-1">{searchQuery} - Google Search</div>
                <div className="text-sm text-gray-600 mt-1">
                  Find the latest news, images, videos, and more about {searchQuery}. Explore millions of results from across the web.
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-gray-800 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">N</div>
                  <span>https://www.news.com › article › {searchQuery}</span>
                </div>
                <div className="text-xl text-blue-600 hover:underline cursor-pointer mt-1">Latest News on {searchQuery}</div>
                <div className="text-sm text-gray-600 mt-1">
                  Breaking news and updates regarding {searchQuery}. Read the full article to stay informed on the most recent developments.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
