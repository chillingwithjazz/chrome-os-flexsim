import React from 'react';

export const PlaceholderApp: React.FC<{ name: string, icon: string | any }> = ({ name, icon }) => {
  return (
    <div className="flex flex-col h-full bg-white items-center justify-center">
      {typeof icon === 'string' ? (
        <img src={icon} alt={name} className="w-24 h-24 mb-4" referrerPolicy="no-referrer" />
      ) : (
        React.createElement(icon, { size: 96, className: "text-gray-400 mb-4" })
      )}
      <h1 className="text-2xl font-medium text-gray-800">{name}</h1>
      <p className="text-gray-500 mt-2">This app is not fully implemented yet.</p>
    </div>
  );
};
