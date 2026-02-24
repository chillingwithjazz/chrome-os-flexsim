import React, { useState, useEffect } from 'react';
import { Battery, BatteryCharging, Wifi, X, Minus, Square, Maximize2 } from 'lucide-react';
import { useDesktop } from '../context/DesktopContext';
import { APPS } from '../config/apps';
import { Launcher } from './Launcher';
import { SystemTray } from './SystemTray';
import { motion, AnimatePresence } from 'motion/react';

export const Shelf: React.FC = () => {
  const { windows, openWindow, closeWindow, activeWindowId, toggleMinimizeWindow, toggleMaximizeWindow } = useDesktop();
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);
  const [isSysTrayOpen, setIsSysTrayOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState(false);
  const [hoveredAppId, setHoveredAppId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryLevel(Math.round(battery.level * 100));
        setIsCharging(battery.charging);

        battery.addEventListener('levelchange', () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });
        battery.addEventListener('chargingchange', () => {
          setIsCharging(battery.charging);
        });
      });
    } else {
      setBatteryLevel(100);
    }
  }, []);

  const handleAppClick = (appId: string) => {
    const window = windows.find(w => w.appId === appId);
    if (window) {
      if (window.id === activeWindowId && !window.isMinimized) {
        toggleMinimizeWindow(window.id);
      } else {
        openWindow(appId as any);
      }
    } else {
      openWindow(appId as any);
    }
    setIsLauncherOpen(false);
  };

  const pinnedApps = ['chrome', 'gmail', 'calendar', 'docs', 'youtube', 'photos'];
  const shelfApps = APPS.filter(app => pinnedApps.includes(app.id) || windows.some(w => w.appId === app.id));

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 h-14 flex items-center justify-between px-2 z-50 select-none pointer-events-none">
        {/* Left: Launcher Button */}
        <div className="flex items-center h-full pointer-events-auto">
          <button
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ml-1 backdrop-blur-md ${
              isLauncherOpen ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => {
              setIsLauncherOpen(!isLauncherOpen);
              setIsSysTrayOpen(false);
            }}
          >
            <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-white flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-white" />
            </div>
          </button>
        </div>

        {/* Center: Pinned Apps & Open Apps */}
        <div className="flex items-center h-11 px-2 bg-white/10 backdrop-blur-md rounded-full absolute left-1/2 -translate-x-1/2 pointer-events-auto space-x-1">
          {shelfApps.map((app) => {
            const isOpen = windows.some((w) => w.appId === app.id);
            const isActive = windows.some((w) => w.appId === app.id && w.id === activeWindowId && !w.isMinimized);
            const appWindow = windows.find(w => w.appId === app.id);

            return (
              <div 
                key={app.id} 
                className="relative flex justify-center h-full items-center"
                onMouseEnter={() => setHoveredAppId(app.id)}
                onMouseLeave={() => setHoveredAppId(null)}
              >
                {/* Window Preview Tooltip */}
                <AnimatePresence>
                  {hoveredAppId === app.id && isOpen && appWindow && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-14 left-1/2 -translate-x-1/2 mb-2 w-64 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden z-50 origin-bottom pointer-events-auto"
                    >
                      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200/50 bg-gray-50/50">
                        <div className="flex items-center space-x-2 overflow-hidden">
                          {typeof app.icon === 'string' ? (
                            <img src={app.icon} alt={app.name} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                          ) : (
                            React.createElement(app.icon, { size: 14, className: app.iconColor || 'text-gray-600' })
                          )}
                          <span className="text-xs font-medium text-gray-700 truncate">{appWindow.title}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <button 
                            className="p-1 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMinimizeWindow(appWindow.id);
                              setHoveredAppId(null);
                            }}
                            title="Minimize"
                          >
                            <Minus size={12} />
                          </button>
                          <button 
                            className="p-1 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMaximizeWindow(appWindow.id);
                              setHoveredAppId(null);
                            }}
                            title={appWindow.isMaximized ? "Restore" : "Maximize"}
                          >
                            {appWindow.isMaximized ? <Maximize2 size={10} /> : <Square size={10} />}
                          </button>
                          <button 
                            className="p-1 hover:bg-red-500 hover:text-white rounded-full text-gray-500 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeWindow(appWindow.id);
                              setHoveredAppId(null);
                            }}
                            title="Close"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      </div>
                      <div 
                        className="h-32 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => handleAppClick(app.id)}
                      >
                        {typeof app.icon === 'string' ? (
                          <img src={app.icon} alt={app.name} className="w-12 h-12 object-contain opacity-50" referrerPolicy="no-referrer" />
                        ) : (
                          React.createElement(app.icon, { size: 48, className: `${app.iconColor || 'text-gray-400'} opacity-50` })
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative transition-all ${
                    isActive ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                  onClick={() => handleAppClick(app.id)}
                  title={app.name}
                >
                  {typeof app.icon === 'string' ? (
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm">
                      <img src={app.icon} alt={app.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${app.bgColor}`}>
                      {React.createElement(app.icon, { size: 18, className: app.iconColor })}
                    </div>
                  )}
                  {isOpen && (
                    <div
                      className={`absolute bottom-0 w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Right: System Tray */}
        <div className="flex items-center h-full space-x-2 pointer-events-auto">
          <div className="h-9 px-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center space-x-3 text-white text-sm transition-colors cursor-pointer"
               onClick={() => {
                 setIsSysTrayOpen(!isSysTrayOpen);
                 setIsLauncherOpen(false);
               }}>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium">Jun {time.getDate()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi size={14} />
              {isCharging ? <BatteryCharging size={14} /> : <Battery size={14} />}
              {batteryLevel !== null && <span className="text-xs">{batteryLevel}%</span>}
            </div>
            <span className="text-xs font-medium">
              {time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>

      {/* Overlays */}
      {isLauncherOpen && <Launcher onClose={() => setIsLauncherOpen(false)} />}
      {isSysTrayOpen && <SystemTray onClose={() => setIsSysTrayOpen(false)} />}
    </>
  );
};
