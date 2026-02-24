import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Menu, Plus, Settings, HelpCircle } from 'lucide-react';

export const CalendarApp: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const today = new Date();
  const isCurrentMonth = today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Calendar" className="w-8 h-8" referrerPolicy="no-referrer" />
            <span className="text-xl font-medium text-gray-700">Calendar</span>
          </div>
          <button className="px-4 py-2 hover:bg-gray-100 rounded border border-gray-300 text-sm font-medium ml-4">
            Today
          </button>
          <div className="flex items-center space-x-2">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <ChevronRight size={20} />
            </button>
          </div>
          <span className="text-xl text-gray-700 ml-2">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><Search size={20} /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><HelpCircle size={20} /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><Settings size={20} /></button>
          <select className="bg-transparent border border-gray-300 rounded px-3 py-1.5 text-sm font-medium hover:bg-gray-50 cursor-pointer ml-2">
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>
          </select>
          <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-medium ml-4">
            U
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 p-4 flex flex-col overflow-y-auto">
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow w-max mb-6">
            <Plus size={24} className="text-blue-600" />
            <span className="font-medium text-gray-700">Create</span>
          </button>
          
          {/* Mini Calendar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
              <div className="flex">
                <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeft size={16} /></button>
                <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-full"><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <div key={i} className="text-gray-500 font-medium">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="p-1 text-transparent">0</div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isToday = isCurrentMonth && day === today.getDate();
                return (
                  <div 
                    key={day} 
                    className={`p-1 rounded-full cursor-pointer ${isToday ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Calendars List */}
          <div>
            <div className="flex items-center justify-between text-sm font-medium text-gray-600 mb-2">
              <span>My calendars</span>
              <ChevronLeft size={16} className="rotate-90" />
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">User Name</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-gray-700">Birthdays</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-green-600 focus:ring-green-500" />
                <span className="text-sm text-gray-700">Tasks</span>
              </label>
            </div>
          </div>
        </div>

        {/* Main Calendar Grid */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-7 border-b border-gray-200">
            {days.map((day, i) => (
              <div key={day} className="py-2 text-center border-r border-gray-200 last:border-r-0">
                <span className="text-xs font-medium text-gray-500">{day}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-cell-${i}`} className="border-r border-b border-gray-200 bg-gray-50/50 p-1"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isToday = isCurrentMonth && day === today.getDate();
              return (
                <div key={day} className="border-r border-b border-gray-200 p-1 min-h-[100px] hover:bg-gray-50 transition-colors cursor-pointer group relative">
                  <div className="flex justify-center mb-1">
                    <div className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium ${isToday ? 'bg-blue-600 text-white' : 'text-gray-700 group-hover:bg-gray-200'}`}>
                      {day}
                    </div>
                  </div>
                  {/* Mock Events */}
                  {day === 15 && (
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded mb-1 truncate">
                      10:00am Team Sync
                    </div>
                  )}
                  {day === 18 && (
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded mb-1 truncate">
                      2:30pm Dentist
                    </div>
                  )}
                  {day === 22 && (
                    <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded mb-1 truncate">
                      All day - Conference
                    </div>
                  )}
                </div>
              );
            })}
            {/* Fill remaining cells */}
            {Array.from({ length: 35 - (firstDayOfMonth + daysInMonth) }).map((_, i) => (
              <div key={`empty-cell-end-${i}`} className="border-r border-b border-gray-200 bg-gray-50/50 p-1"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
