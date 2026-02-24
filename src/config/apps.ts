import { Settings, Video, Camera, Calculator } from 'lucide-react';
import { AppConfig } from '../types';

export const APPS: AppConfig[] = [
  { id: 'chrome', name: 'Chrome', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg' },
  { id: 'gmail', name: 'Gmail', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' },
  { id: 'calendar', name: 'Calendar', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
  { id: 'docs', name: 'Docs', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg' },
  { id: 'slides', name: 'Slides', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg' },
  { id: 'sheets', name: 'Sheets', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg' },
  
  { id: 'keep', name: 'Keep', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Keep_icon.svg' },
  { id: 'youtube', name: 'YouTube', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
  { id: 'playstore', name: 'Play Store', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Google_Play_Store_icon_%282022%29.svg' },
  { id: 'meet', name: 'Meet', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg' },
  
  { id: 'drive', name: 'Drive', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg' },
  { id: 'camera', name: 'Camera', icon: Camera, bgColor: 'bg-gray-800', iconColor: 'text-white' },
  { id: 'photos', name: 'Photos', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Photos_icon_%282020%29.svg' },
  
  { id: 'maps', name: 'Maps', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg' },
  { id: 'files', name: 'Files', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Files_logo.svg/512px-Google_Files_logo.svg.png' },
  { id: 'gemini', name: 'Gemini', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
  { id: 'video', name: 'Video Maker', icon: Video, bgColor: 'bg-red-500', iconColor: 'text-white' },
  { id: 'calculator', name: 'Calculator', icon: Calculator, bgColor: 'bg-orange-500', iconColor: 'text-white' },
  { id: 'twitter', name: 'X', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg' },
  { id: 'instagram', name: 'Instagram', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
  { id: 'facebook', name: 'Facebook', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' },
  { id: 'settings', name: 'Settings', icon: Settings, bgColor: 'bg-gray-500', iconColor: 'text-white' },
];
