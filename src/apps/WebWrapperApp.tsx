import React from 'react';

export const WebWrapperApp: React.FC<{ url: string, name: string }> = ({ url, name }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-4">
        <div className="flex space-x-2">
          <button className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <button className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </button>
        </div>
        <div className="flex-1 bg-white border border-gray-300 rounded-full h-7 px-4 flex items-center text-sm text-gray-600 truncate">
          {url}
        </div>
      </div>
      <div className="flex-1 bg-gray-50 flex items-center justify-center">
        <iframe src={url} title={name} className="w-full h-full border-none" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" />
      </div>
    </div>
  );
};
