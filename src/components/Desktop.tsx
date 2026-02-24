import React from 'react';
import { useDesktop } from '../context/DesktopContext';
import { Window } from './Window';
import { DesktopClock } from './DesktopClock';
import { SettingsApp } from '../apps/SettingsApp';
import { DocsApp } from '../apps/DocsApp';
import { SheetsApp } from '../apps/SheetsApp';
import { SlidesApp } from '../apps/SlidesApp';
import { VideoMakerApp } from '../apps/VideoMakerApp';
import { ChromeApp } from '../apps/ChromeApp';
import { PlayStoreApp } from '../apps/PlayStoreApp';
import { FilesApp } from '../apps/FilesApp';
import { GmailApp } from '../apps/GmailApp';
import { CalendarApp } from '../apps/CalendarApp';
import { GeminiApp } from '../apps/GeminiApp';
import { CalculatorApp } from '../apps/CalculatorApp';
import { KeepApp } from '../apps/KeepApp';
import { DriveApp } from '../apps/DriveApp';
import { CameraApp } from '../apps/CameraApp';
import { PhotosApp } from '../apps/PhotosApp';
import { MeetApp } from '../apps/MeetApp';
import { WebWrapperApp } from '../apps/WebWrapperApp';
import { PlaceholderApp } from '../apps/PlaceholderApp';
import { APPS } from '../config/apps';

export const Desktop: React.FC = () => {
  const { windows, wallpaper, isOverviewOpen, setIsOverviewOpen, focusWindow } = useDesktop();

  const renderAppContent = (appId: string) => {
    switch (appId) {
      case 'settings': return <SettingsApp />;
      case 'docs': return <DocsApp />;
      case 'sheets': return <SheetsApp />;
      case 'slides': return <SlidesApp />;
      case 'video': return <VideoMakerApp />;
      case 'chrome': return <ChromeApp />;
      case 'playstore': return <PlayStoreApp />;
      case 'files': return <FilesApp />;
      case 'gmail': return <GmailApp />;
      case 'calendar': return <CalendarApp />;
      case 'gemini': return <GeminiApp />;
      case 'calculator': return <CalculatorApp />;
      case 'keep': return <KeepApp />;
      case 'drive': return <DriveApp />;
      case 'camera': return <CameraApp />;
      case 'photos': return <PhotosApp />;
      case 'meet': return <MeetApp />;
      case 'youtube': return <WebWrapperApp url="https://www.youtube.com/embed/dQw4w9WgXcQ" name="YouTube" />;
      case 'maps': return <WebWrapperApp url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284164687!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1" name="Maps" />;
      case 'twitter': return <WebWrapperApp url="https://twitter.com" name="X" />;
      case 'instagram': return <WebWrapperApp url="https://instagram.com" name="Instagram" />;
      case 'facebook': return <WebWrapperApp url="https://facebook.com" name="Facebook" />;
      default: {
        const appConfig = APPS.find(a => a.id === appId);
        return <PlaceholderApp name={appConfig?.name || 'Unknown App'} icon={appConfig?.icon || ''} />;
      }
    }
  };

  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <DesktopClock />
      
      {windows.map((window) => (
        <Window key={window.id} windowState={window}>
          {renderAppContent(window.appId)}
        </Window>
      ))}

      {isOverviewOpen && (
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-md z-[100] flex flex-wrap items-center justify-center gap-8 p-12 overflow-auto"
          onClick={() => setIsOverviewOpen(false)}
        >
          {windows.filter(w => !w.isMinimized).map((window) => {
            const appConfig = APPS.find(a => a.id === window.appId);
            return (
              <div 
                key={`overview-${window.id}`}
                className="flex flex-col items-center space-y-3 cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  focusWindow(window.id);
                }}
              >
                <div className="w-64 h-40 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all transform group-hover:scale-105 relative">
                  {/* We can't easily render the actual live app content scaled down without performance issues, 
                      so we show a placeholder with the app icon for the overview thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    {appConfig && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        {typeof appConfig.icon === 'string' ? (
                          <img src={appConfig.icon} alt={appConfig.name} className="w-full h-full object-contain drop-shadow-md" referrerPolicy="no-referrer" />
                        ) : (
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${appConfig.bgColor}`}>
                            {React.createElement(appConfig.icon, { size: 32, className: appConfig.iconColor })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {window.title}
                </div>
              </div>
            );
          })}
          {windows.filter(w => !w.isMinimized).length === 0 && (
            <div className="text-white text-xl font-medium bg-black/50 px-6 py-3 rounded-full backdrop-blur-md">
              No open windows
            </div>
          )}
        </div>
      )}
    </div>
  );
};
