import React, { useState } from 'react';
import { useDesktop } from '../context/DesktopContext';
import { Monitor, Wifi, Bluetooth, Palette, User, Shield, Battery, Volume2 } from 'lucide-react';

const WALLPAPERS = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744626753-eba7bc3613ee?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
];

export const SettingsApp: React.FC = () => {
  const { wallpaper, setWallpaper, clockConfig, setClockConfig } = useDesktop();
  const [activeTab, setActiveTab] = useState('personalization');

  const tabs = [
    { id: 'personalization', label: 'Personalization', icon: Palette },
    { id: 'network', label: 'Network & Internet', icon: Wifi },
    { id: 'bluetooth', label: 'Bluetooth & Devices', icon: Bluetooth },
    { id: 'device', label: 'Device', icon: Monitor },
    { id: 'accounts', label: 'Accounts', icon: User },
    { id: 'security', label: 'Security & Privacy', icon: Shield },
  ];

  return (
    <div className="flex h-full bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col space-y-1">
        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Settings
        </div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              activeTab === tab.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <tab.icon size={18} />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6">{tabs.find(t => t.id === activeTab)?.label}</h1>
        
        {activeTab === 'personalization' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium mb-4">Wallpaper</h2>
              <div className="grid grid-cols-2 gap-4">
                {WALLPAPERS.map((url, idx) => (
                  <button
                    key={idx}
                    className={`relative rounded-lg overflow-hidden aspect-video border-2 transition-all ${
                      wallpaper === url ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-transparent hover:border-gray-300'
                    }`}
                    onClick={() => setWallpaper(url)}
                  >
                    <img src={url} alt={`Wallpaper ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium mb-4">Desktop Clock</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Show Clock</h3>
                    <p className="text-sm text-gray-500">Display a large clock on the desktop</p>
                  </div>
                  <button 
                    className={`w-12 h-6 rounded-full relative transition-colors ${clockConfig?.show ? 'bg-blue-500' : 'bg-gray-300'}`}
                    onClick={() => setClockConfig({ ...clockConfig, show: !clockConfig.show })}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${clockConfig?.show ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>

                {clockConfig?.show && (
                  <>
                    <div className="pt-4 border-t border-gray-100">
                      <h3 className="font-medium mb-3">Clock Style</h3>
                      <div className="flex space-x-3">
                        {(['default', 'glass', 'solid'] as const).map((style) => (
                          <button
                            key={style}
                            onClick={() => setClockConfig({ ...clockConfig, style })}
                            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                              clockConfig.style === style 
                                ? 'bg-blue-100 text-blue-700 border-2 border-blue-500' 
                                : 'bg-gray-50 text-gray-700 border-2 border-transparent hover:bg-gray-100'
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Depth Effect</h3>
                        <p className="text-sm text-gray-500">Partially hide the clock behind the wallpaper</p>
                      </div>
                      <button 
                        className={`w-12 h-6 rounded-full relative transition-colors ${clockConfig?.depthEffect ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => setClockConfig({ ...clockConfig, depthEffect: !clockConfig.depthEffect })}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${clockConfig?.depthEffect ? 'right-1' : 'left-1'}`}></div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'network' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Wifi size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Wi-Fi</h3>
                  <p className="text-sm text-gray-500">Connected to Home_Network_5G</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'device' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                  <Monitor size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Display</h3>
                  <p className="text-sm text-gray-500">Resolution, scaling, night light</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Brightness</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <input type="range" className="w-full accent-blue-500" defaultValue="75" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                  <Volume2 size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Sound</h3>
                  <p className="text-sm text-gray-500">Volume, output device</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Volume</span>
                    <span className="text-sm text-gray-500">50%</span>
                  </div>
                  <input type="range" className="w-full accent-blue-500" defaultValue="50" />
                </div>
              </div>
            </div>
          </div>
        )}

        {['bluetooth', 'accounts', 'security'].includes(activeTab) && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mb-4">
              {(() => {
                const Icon = tabs.find(t => t.id === activeTab)?.icon;
                return Icon ? <Icon size={32} /> : null;
              })()}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No settings available</h3>
            <p className="text-gray-500 max-w-sm">
              These settings are not available in the current preview environment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
