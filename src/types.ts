import { LucideIcon } from 'lucide-react';

export type AppId = 'settings' | 'docs' | 'sheets' | 'slides' | 'video' | 'chrome' | 'playstore' | 'files' | 'gmail' | 'calendar' | 'keep' | 'youtube' | 'drive' | 'maps' | 'photos' | 'camera' | 'meet' | 'gemini' | 'calculator' | 'twitter' | 'instagram' | 'facebook';

export interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface AppConfig {
  id: AppId;
  name: string;
  icon: LucideIcon | string;
  bgColor?: string;
  iconColor?: string;
}
