import React, { useRef } from 'react';
import { motion, useDragControls } from 'motion/react';
import { Minus, Square, X, Maximize2 } from 'lucide-react';
import { useDesktop } from '../context/DesktopContext';
import { WindowState } from '../types';
import { APPS } from '../config/apps';

interface WindowProps {
  windowState: WindowState;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({ windowState, children }) => {
  const {
    closeWindow,
    focusWindow,
    toggleMinimizeWindow,
    toggleMaximizeWindow,
    updateWindowPosition,
    activeWindowId,
  } = useDesktop();

  const windowRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  if (windowState.isMinimized) return null;

  const isActive = activeWindowId === windowState.id;
  const appConfig = APPS.find(app => app.id === windowState.appId);

  return (
    <motion.div
      ref={windowRef}
      id={`window-${windowState.id}`}
      className={`absolute flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 ${
        isActive ? 'ring-1 ring-blue-500/50 shadow-blue-900/10' : 'shadow-black/20'
      }`}
      style={{
        zIndex: windowState.zIndex,
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.95,
        x: windowState.position.x,
        y: windowState.position.y,
        width: windowState.size.width,
        height: windowState.size.height,
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: windowState.isMaximized ? 0 : windowState.position.x,
        y: windowState.isMaximized ? 0 : windowState.position.y,
        width: windowState.isMaximized ? '100%' : windowState.size.width,
        height: windowState.isMaximized ? 'calc(100% - 56px)' : windowState.size.height,
        borderRadius: windowState.isMaximized ? '0px' : '0.5rem',
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, type: 'spring', bounce: 0, ease: 'easeInOut' }}
      drag={!windowState.isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onDragEnd={(e, info) => {
        updateWindowPosition(windowState.id, {
          x: windowState.position.x + info.offset.x,
          y: windowState.position.y + info.offset.y,
        });
      }}
      onMouseDown={() => focusWindow(windowState.id)}
    >
      {/* Title Bar */}
      <div
        className="h-12 bg-gray-100/90 backdrop-blur-md flex items-center justify-between px-3 select-none cursor-default border-b border-gray-200"
        onPointerDown={(e) => {
          focusWindow(windowState.id);
          dragControls.start(e);
        }}
        onDoubleClick={() => toggleMaximizeWindow(windowState.id)}
      >
        <div className="flex items-center space-x-3 overflow-hidden pl-1">
          {appConfig && (
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              {typeof appConfig.icon === 'string' ? (
                <img src={appConfig.icon} alt={appConfig.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              ) : (
                React.createElement(appConfig.icon, { size: 16, className: appConfig.iconColor || 'text-gray-600' })
              )}
            </div>
          )}
          <span className="text-sm font-medium text-gray-700 truncate">
            {windowState.title}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200/80 rounded-full text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              toggleMinimizeWindow(windowState.id);
            }}
            title="Minimize"
          >
            <Minus size={18} />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200/80 rounded-full text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximizeWindow(windowState.id);
            }}
            title={windowState.isMaximized ? "Restore" : "Maximize"}
          >
            {windowState.isMaximized ? <Maximize2 size={16} /> : <Square size={14} />}
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white rounded-full text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(windowState.id);
            }}
            title="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-white relative">
        {isActive && <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5" />}
        {children}
      </div>
    </motion.div>
  );
};
