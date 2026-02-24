import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Scissors, Copy, Trash2, Plus, Layers, Image as ImageIcon, Music, Type, Settings2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const VideoMakerApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('media');
  const [hoveredClip, setHoveredClip] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full bg-[#121212] text-white overflow-hidden font-sans">
      {/* Top section: Preview and Media */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar - Tools */}
        <div className="w-16 bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col items-center py-4 space-y-6 z-10">
          <button 
            className={`p-3 rounded-xl transition-all ${activeTab === 'media' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => setActiveTab('media')}
          >
            <ImageIcon size={20} />
          </button>
          <button 
            className={`p-3 rounded-xl transition-all ${activeTab === 'audio' ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => setActiveTab('audio')}
          >
            <Music size={20} />
          </button>
          <button 
            className={`p-3 rounded-xl transition-all ${activeTab === 'text' ? 'bg-green-500/20 text-green-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => setActiveTab('text')}
          >
            <Type size={20} />
          </button>
          <button 
            className={`p-3 rounded-xl transition-all ${activeTab === 'transitions' ? 'bg-orange-500/20 text-orange-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => setActiveTab('transitions')}
          >
            <Layers size={20} />
          </button>
        </div>

        {/* Media Library Panel */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-64 bg-[#1a1a1a]/80 backdrop-blur-lg border-r border-white/10 flex flex-col z-10"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <span className="font-medium text-sm capitalize">{activeTab}</span>
              <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><Plus size={14} /></button>
            </div>
            <div className="p-3 grid grid-cols-2 gap-3 overflow-y-auto">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-white/5 flex items-center justify-center text-xs text-gray-400 cursor-pointer shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Item {i}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Preview Player */}
        <div className="flex-1 flex flex-col relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-[#121212] to-black">
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-3xl aspect-video bg-black rounded-xl shadow-2xl ring-1 ring-white/10 flex items-center justify-center relative overflow-hidden group">
              {/* Simulated Video Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 mix-blend-overlay" />
              <motion.div 
                animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60"
              />
              
              <span className="text-white/50 font-medium tracking-widest uppercase text-sm z-10">Preview Window</span>
              
              {/* Player Overlay Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button 
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <span className="text-xs font-mono text-white/80">00:01:23 / 00:05:00</span>
                </div>
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Transport Controls */}
          <div className="h-16 bg-black/40 backdrop-blur-md border-t border-white/5 flex items-center justify-center space-x-6">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"><SkipBack size={20} /></button>
            <button 
              className="w-12 h-12 bg-white text-black hover:bg-gray-200 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"><SkipForward size={20} /></button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="h-72 bg-[#1a1a1a] border-t border-white/10 flex flex-col relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {/* Timeline Toolbar */}
        <div className="h-10 bg-black/20 border-b border-white/5 flex items-center px-4 space-x-2">
          <div className="flex bg-white/5 rounded-lg p-0.5">
            <button className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors"><Scissors size={14} /></button>
            <button className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors"><Copy size={14} /></button>
            <button className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors"><Trash2 size={14} /></button>
          </div>
          <div className="w-px h-4 bg-white/10 mx-2" />
          <button className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors"><Settings2 size={14} /></button>
          
          <div className="flex-1"></div>
          
          <div className="flex items-center space-x-3 bg-white/5 px-3 py-1 rounded-full">
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Zoom</span>
            <input type="range" className="w-24 accent-blue-500 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
          </div>
        </div>
        
        {/* Tracks Area */}
        <div className="flex-1 overflow-auto relative bg-[#121212] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:40px_100%]">
          {/* Playhead */}
          <motion.div 
            className="absolute top-0 bottom-0 w-px bg-red-500 z-30 pointer-events-none"
            animate={{ left: isPlaying ? '60%' : '33%' }}
            transition={{ duration: isPlaying ? 10 : 0.5, ease: "linear" }}
          >
            <div className="absolute -top-0 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-500" />
            <div className="absolute top-0 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          </motion.div>

          {/* Time Ruler */}
          <div className="h-6 border-b border-white/5 flex items-end px-24 text-[10px] text-gray-600 font-mono select-none sticky top-0 bg-[#121212]/90 backdrop-blur-sm z-20">
            <div className="flex-1 relative">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute bottom-0 border-l border-gray-700 h-2" style={{ left: `${i * 10}%` }}>
                  <span className="absolute -top-4 -left-3">00:0{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 space-y-1">
            {/* Video Track 1 */}
            <div className="flex h-16 bg-white/[0.02] rounded-lg border border-white/5 hover:bg-white/[0.04] transition-colors group">
              <div className="w-24 bg-black/40 border-r border-white/5 flex items-center px-3 text-xs text-gray-500 font-medium rounded-l-lg group-hover:text-gray-300 transition-colors">V1</div>
              <div className="flex-1 relative p-1.5">
                {/* Clip 1 */}
                <motion.div 
                  className="absolute left-4 w-48 h-[52px] bg-blue-500/20 border border-blue-500/50 rounded-md flex flex-col justify-center px-3 text-xs overflow-hidden cursor-pointer hover:border-blue-400 hover:bg-blue-500/30 transition-colors shadow-lg"
                  onHoverStart={() => setHoveredClip(1)}
                  onHoverEnd={() => setHoveredClip(null)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400/30" />
                  <span className="font-medium text-blue-100 truncate">Intro_Sequence.mp4</span>
                  <span className="text-[10px] text-blue-300/70">00:00 - 00:05</span>
                </motion.div>

                {/* Transition Effect (Fade) */}
                <div className="absolute left-[200px] w-8 h-[52px] z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center border-y border-white/10 backdrop-blur-sm">
                    <Layers size={12} className="text-white/50" />
                  </div>
                </div>

                {/* Clip 2 */}
                <motion.div 
                  className="absolute left-[200px] w-64 h-[52px] bg-purple-500/20 border border-purple-500/50 rounded-md flex flex-col justify-center px-3 text-xs overflow-hidden cursor-pointer hover:border-purple-400 hover:bg-purple-500/30 transition-colors shadow-lg"
                  onHoverStart={() => setHoveredClip(2)}
                  onHoverEnd={() => setHoveredClip(null)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-purple-400/30" />
                  <span className="font-medium text-purple-100 truncate">Main_Content_B_Roll.mp4</span>
                  <span className="text-[10px] text-purple-300/70">00:05 - 00:15</span>
                </motion.div>
              </div>
            </div>

            {/* Audio Track 1 */}
            <div className="flex h-14 bg-white/[0.02] rounded-lg border border-white/5 hover:bg-white/[0.04] transition-colors group">
              <div className="w-24 bg-black/40 border-r border-white/5 flex items-center px-3 text-xs text-gray-500 font-medium rounded-l-lg group-hover:text-gray-300 transition-colors">A1</div>
              <div className="flex-1 relative p-1.5">
                <motion.div 
                  className="absolute left-4 w-[444px] h-[44px] bg-emerald-500/10 border border-emerald-500/30 rounded-md flex items-center px-3 text-xs overflow-hidden cursor-pointer hover:border-emerald-400/50 hover:bg-emerald-500/20 transition-colors"
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Simulated Waveform */}
                  <div className="absolute inset-0 opacity-20 flex items-center justify-around px-1 pointer-events-none">
                    {[...Array(40)].map((_, i) => (
                      <div key={i} className="w-1 bg-emerald-400 rounded-full" style={{ height: `${Math.random() * 80 + 10}%` }} />
                    ))}
                  </div>
                  <Music size={12} className="text-emerald-400 mr-2 z-10" />
                  <span className="font-medium text-emerald-100/80 z-10 truncate">Ambient_Background_Music.wav</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
