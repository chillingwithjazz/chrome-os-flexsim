import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDesktop } from '../context/DesktopContext';

export const DesktopClock: React.FC = () => {
  const { clockConfig } = useDesktop();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${strMinutes}`;
  };

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  };

  const getClockStyle = () => {
    switch (clockConfig.style) {
      case 'glass':
        return 'text-white/80 mix-blend-overlay drop-shadow-lg';
      case 'solid':
        return 'text-white drop-shadow-2xl';
      default:
        return 'text-white/90 drop-shadow-xl';
    }
  };

  return (
    <AnimatePresence>
      {clockConfig?.show && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-0 select-none"
          style={{
            maskImage: clockConfig.depthEffect ? 'linear-gradient(to bottom, black 40%, transparent 90%)' : 'none',
            WebkitMaskImage: clockConfig.depthEffect ? 'linear-gradient(to bottom, black 40%, transparent 90%)' : 'none',
          }}
        >
          <div className={`text-2xl font-medium tracking-wide mb-2 transition-all duration-500 ${getClockStyle()}`}>
            {formatDate(time)}
          </div>
          <div 
            className={`text-[12rem] leading-none font-light tracking-tight transition-all duration-500 ${getClockStyle()}`}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {formatTime(time)}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
