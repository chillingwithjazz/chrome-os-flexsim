import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WindowState, AppId } from '../types';
import { APPS } from '../config/apps';

export interface ClockConfig {
  show: boolean;
  style: 'default' | 'glass' | 'solid';
  depthEffect: boolean;
}

interface DesktopState {
  windows: WindowState[];
  activeWindowId: string | null;
  wallpaper: string;
  isOverviewOpen: boolean;
  clockConfig: ClockConfig;
  openWindow: (appId: AppId) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  toggleMinimizeWindow: (id: string) => void;
  toggleMaximizeWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number; height: number }) => void;
  setWallpaper: (url: string) => void;
  setClockConfig: (config: ClockConfig) => void;
  toggleOverview: () => void;
  setIsOverviewOpen: (isOpen: boolean) => void;
}

const DesktopContext = createContext<DesktopState | undefined>(undefined);

export const DesktopProvider = ({ children }: { children: ReactNode }) => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [wallpaper, setWallpaper] = useState<string>('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2564&auto=format&fit=crop');
  const [nextZIndex, setNextZIndex] = useState(10);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [clockConfig, setClockConfig] = useState<ClockConfig>({
    show: true,
    style: 'glass',
    depthEffect: false,
  });

  const openWindow = (appId: AppId) => {
    const app = APPS.find((a) => a.id === appId);
    if (!app) return;

    const existingWindow = windows.find(w => w.appId === appId);
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        toggleMinimizeWindow(existingWindow.id);
      }
      focusWindow(existingWindow.id);
      setIsOverviewOpen(false);
      return;
    }

    const newWindow: WindowState = {
      id: `${appId}-${Date.now()}`,
      appId,
      title: app.name,
      isMinimized: false,
      isMaximized: false,
      zIndex: nextZIndex,
      position: { x: 100 + windows.length * 30, y: 100 + windows.length * 30 },
      size: { width: 800, height: 600 },
    };

    setWindows([...windows, newWindow]);
    setActiveWindowId(newWindow.id);
    setNextZIndex(nextZIndex + 1);
    setIsOverviewOpen(false);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
    if (windows.length <= 1) {
      setIsOverviewOpen(false);
    }
  };

  const focusWindow = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setActiveWindowId(id);
    setNextZIndex(nextZIndex + 1);
    setIsOverviewOpen(false);
  };

  const toggleMinimizeWindow = (id: string) => {
    setWindows(
      windows.map((w) => {
        if (w.id === id) {
          const newMinimized = !w.isMinimized;
          if (!newMinimized) focusWindow(id);
          return { ...w, isMinimized: newMinimized };
        }
        return w;
      })
    );
  };

  const toggleMaximizeWindow = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      )
    );
    focusWindow(id);
  };

  const updateWindowPosition = (id: string, position: { x: number; y: number }) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, position, isMaximized: false } : w
      )
    );
  };

  const updateWindowSize = (id: string, size: { width: number; height: number }) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, size, isMaximized: false } : w
      )
    );
  };

  const toggleOverview = () => {
    if (windows.length > 0) {
      setIsOverviewOpen(!isOverviewOpen);
    }
  };

  return (
    <DesktopContext.Provider
      value={{
        windows,
        activeWindowId,
        wallpaper,
        isOverviewOpen,
        clockConfig,
        openWindow,
        closeWindow,
        focusWindow,
        toggleMinimizeWindow,
        toggleMaximizeWindow,
        updateWindowPosition,
        updateWindowSize,
        setWallpaper,
        setClockConfig,
        toggleOverview,
        setIsOverviewOpen,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};

export const useDesktop = () => {
  const context = useContext(DesktopContext);
  if (!context) throw new Error('useDesktop must be used within DesktopProvider');
  return context;
};
