import React from 'react';

const BottomNav = ({ currentTab, onTabChange }) => {
  const tabs = [
    { id: 'chats', label: 'Chats', icon: '💬' },
    { id: 'bets', label: 'My Bets', icon: '🎲' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 safe-area-bottom">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              currentTab === tab.id
                ? 'text-purple-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <span className="text-2xl mb-1">{tab.icon}</span>
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
