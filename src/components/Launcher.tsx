import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Mic } from 'lucide-react';
import { APPS } from '../config/apps';
import { useDesktop } from '../context/DesktopContext';

export const Launcher: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { openWindow } = useDesktop();
  const [search, setSearch] = useState('');

  const filteredApps = APPS.filter(app => app.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm z-30"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-16 w-[800px] max-w-[95vw] h-[600px] max-h-[80vh] bg-[#202124]/80 backdrop-blur-3xl rounded-3xl flex flex-col items-center pt-8 z-40 shadow-2xl border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-full max-w-3xl flex flex-col items-center h-full">
          {/* Search Bar */}
          <div className="w-full max-w-2xl relative mb-8 px-6">
            <div className="absolute inset-y-0 left-10 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              autoFocus
              placeholder="Search apps, web, and more..."
              className="w-full bg-white/10 text-white placeholder-gray-400 rounded-full py-3 pl-12 pr-12 focus:outline-none focus:bg-white/20 transition-colors shadow-inner text-sm border border-white/5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 right-10 flex items-center pointer-events-none">
              <Mic size={18} className="text-blue-400" />
            </div>
          </div>

          {/* Apps Grid */}
          <div className="w-full flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-y-8 gap-x-4">
              {filteredApps.map((app) => (
                <button
                  key={app.id}
                  className="flex flex-col items-center space-y-2 group"
                  onClick={() => {
                    openWindow(app.id);
                    onClose();
                  }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${app.bgColor || 'bg-white'} group-hover:scale-105 transition-transform shadow-md overflow-hidden`}>
                    {typeof app.icon === 'string' ? (
                      <img src={app.icon} alt={app.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
                    ) : (
                      React.createElement(app.icon, { size: 28, className: app.iconColor })
                    )}
                  </div>
                  <span className="text-white text-xs text-center truncate w-full px-1 drop-shadow-md font-medium">
                    {app.name}
                  </span>
                </button>
              ))}
              {filteredApps.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-400">
                  <Search size={32} className="mb-4 opacity-50" />
                  <p>No apps found matching "{search}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
