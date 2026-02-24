import React, { useState } from 'react';
import { Search, Menu, HelpCircle, Settings, Inbox, Star, Clock, Send, File, AlertCircle, Trash2, MoreVertical, RefreshCcw, MoreHorizontal, ChevronLeft, ChevronRight, Users } from 'lucide-react';

export const GmailApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Primary');
  
  const emails = [
    { id: 1, sender: 'Google', subject: 'Security alert', snippet: 'A new sign-in on Mac was detected...', time: '10:30 AM', unread: true },
    { id: 2, sender: 'GitHub', subject: 'Your weekly digest', snippet: 'Here are the top repositories trending this week...', time: '9:15 AM', unread: true },
    { id: 3, sender: 'Sarah Jenkins', subject: 'Project Update', snippet: 'Hi team, just wanted to give a quick update on the...', time: 'Yesterday', unread: false },
    { id: 4, sender: 'Netflix', subject: 'New arrivals for you', snippet: 'Check out what is new on Netflix this week...', time: 'Yesterday', unread: false },
    { id: 5, sender: 'Amazon', subject: 'Your order has shipped', snippet: 'Your package is on its way and will arrive by...', time: 'Oct 24', unread: false },
    { id: 6, sender: 'LinkedIn', subject: 'You appeared in 12 searches', snippet: 'See who is looking at your profile...', time: 'Oct 23', unread: false },
    { id: 7, sender: 'Spotify', subject: 'Your new Discover Weekly', snippet: 'A playlist made just for you, updated every Monday.', time: 'Oct 22', unread: false },
    { id: 8, sender: 'Twitter', subject: 'What you missed', snippet: 'See top Tweets from people you follow...', time: 'Oct 21', unread: false },
  ];

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="flex items-center space-x-4 w-64">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-8 h-8" referrerPolicy="no-referrer" />
            <span className="text-xl font-medium text-gray-600">Gmail</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-3xl">
          <div className="relative flex items-center bg-[#f1f3f4] rounded-lg px-4 py-2 focus-within:bg-white focus-within:shadow-md border border-transparent focus-within:border-gray-200 transition-all">
            <Search size={20} className="text-gray-500 mr-3" />
            <input 
              type="text" 
              placeholder="Search mail" 
              className="bg-transparent border-none focus:outline-none text-base w-full"
            />
            <button className="p-1 hover:bg-gray-200 rounded-full text-gray-500">
              <Settings size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 w-64 justify-end">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><HelpCircle size={20} /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><Settings size={20} /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><MoreVertical size={20} /></button>
          <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-medium ml-2">
            U
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 flex flex-col py-3 pr-4 overflow-y-auto">
          <button className="flex items-center space-x-3 bg-[#c2e7ff] text-[#001d35] hover:bg-[#b3dcf5] hover:shadow-md transition-all rounded-2xl px-5 py-4 mx-2 mb-4 w-max">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 5.9l-1.3-1.3c-.8-.8-2-.8-2.8 0L6 14.9V18h3.1l10.3-10.3c.8-.8.8-2 0-2.8zM8.1 16.5H7.5v-.6l8.3-8.3.6.6-8.3 8.3z"/></svg>
            <span className="font-medium">Compose</span>
          </button>
          
          <nav className="flex flex-col space-y-0.5">
            <a href="#" className="flex items-center space-x-4 px-6 py-2 bg-[#d3e3fd] text-[#041e49] rounded-r-full font-medium">
              <Inbox size={20} />
              <span className="flex-1">Inbox</span>
              <span className="text-xs font-bold">2</span>
            </a>
            <a href="#" className="flex items-center space-x-4 px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
              <Star size={20} />
              <span>Starred</span>
            </a>
            <a href="#" className="flex items-center space-x-4 px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
              <Clock size={20} />
              <span>Snoozed</span>
            </a>
            <a href="#" className="flex items-center space-x-4 px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
              <Send size={20} />
              <span>Sent</span>
            </a>
            <a href="#" className="flex items-center space-x-4 px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
              <File size={20} />
              <span>Drafts</span>
            </a>
            <a href="#" className="flex items-center space-x-4 px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
              <AlertCircle size={20} />
              <span>Spam</span>
            </a>
            <a href="#" className="flex items-center space-x-4 px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full">
              <Trash2 size={20} />
              <span>Trash</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white rounded-t-2xl mt-2 mr-2 border border-gray-200 shadow-sm overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <label className="flex items-center cursor-pointer p-2 hover:bg-gray-100 rounded">
                <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              </label>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><RefreshCcw size={18} /></button>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><MoreVertical size={18} /></button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>1-50 of 1,234</span>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><ChevronLeft size={18} /></button>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><ChevronRight size={18} /></button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {['Primary', 'Promotions', 'Social'].map(tab => (
              <button 
                key={tab}
                className={`flex-1 py-3 px-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'Primary' && <Inbox size={18} />}
                {tab === 'Promotions' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>}
                {tab === 'Social' && <Users size={18} />}
                <span className="font-medium text-sm">{tab}</span>
                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-md"></div>}
              </button>
            ))}
          </div>

          {/* Email List */}
          <div className="flex-1 overflow-y-auto">
            {emails.map(email => (
              <div key={email.id} className={`flex items-center px-4 py-2 border-b border-gray-100 hover:shadow-md cursor-pointer group ${email.unread ? 'bg-white font-bold text-gray-900' : 'bg-gray-50/50 text-gray-700'}`}>
                <div className="flex items-center space-x-3 w-64 flex-shrink-0">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                  <Star size={18} className="text-gray-300 hover:text-yellow-400" />
                  <span className="truncate">{email.sender}</span>
                </div>
                <div className="flex-1 truncate flex items-center space-x-2">
                  <span>{email.subject}</span>
                  <span className="text-gray-500 font-normal">-</span>
                  <span className="text-gray-500 font-normal truncate">{email.snippet}</span>
                </div>
                <div className="w-24 text-right text-xs text-gray-500 flex-shrink-0">
                  {email.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
