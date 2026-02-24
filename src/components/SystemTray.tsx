import React from 'react';
import { motion } from 'motion/react';
import { Settings, Wifi, Bluetooth, Volume2, Battery, Power, Lock, Moon } from 'lucide-react';
import { useDesktop } from '../context/DesktopContext';

export const SystemTray: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { openWindow } = useDesktop();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-16 right-2 w-80 bg-[#202124]/70 backdrop-blur-2xl rounded-2xl shadow-2xl p-4 z-40 border border-white/10 text-white"
    >
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
        <div className="flex items-center space-x-3 text-sm">
          <Battery size={18} className="text-green-400" />
          <span>85% - 4h 20m left</span>
        </div>
        <div className="flex space-x-2">
          <button 
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => {
              openWindow('settings');
              onClose();
            }}
          >
            <Settings size={18} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Lock size={18} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Power size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <button className="flex items-center space-x-3 bg-blue-500/20 hover:bg-blue-500/30 p-3 rounded-xl transition-colors text-blue-400">
          <Wifi size={20} />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">Wi-Fi</span>
            <span className="text-xs opacity-70">Connected</span>
          </div>
        </button>
        <button className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 p-3 rounded-xl transition-colors">
          <Bluetooth size={20} />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">Bluetooth</span>
            <span className="text-xs opacity-70">Off</span>
          </div>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Volume2 size={18} className="text-white/70" />
          <input type="range" className="flex-1 accent-blue-500 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer" defaultValue={70} />
        </div>
        <div className="flex items-center space-x-3">
          <Moon size={18} className="text-white/70" />
          <input type="range" className="flex-1 accent-blue-500 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer" defaultValue={40} />
        </div>
      </div>
    </motion.div>
  );
};
