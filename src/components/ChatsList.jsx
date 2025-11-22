import React from 'react';
import { groupChats } from '../data/mockData';

const ChatsList = ({ onChatSelect }) => {
  const formatTime = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    return `${diffDays}d`;
  };

  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 px-4 py-4 border-b border-gray-800 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-white">StakeSocial</h1>
        <p className="text-sm text-gray-400 mt-1">Your group prediction markets</p>
      </div>

      {/* Chats List */}
      <div className="flex-1 overflow-y-auto pb-20">
        {groupChats.map(chat => (
          <button
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className="w-full px-4 py-4 border-b border-gray-800 hover:bg-gray-900/50 transition-colors text-left"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                {chat.pendingBets > 0 && (
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-gray-950">
                    {chat.pendingBets}
                  </div>
                )}
              </div>

              {/* Chat Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-white truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                    {formatTime(chat.timestamp)}
                  </span>
                </div>

                {/* Member Avatars */}
                <div className="flex -space-x-2 mb-2">
                  {chat.memberAvatars.slice(0, 3).map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="member"
                      className="w-6 h-6 rounded-full border-2 border-gray-950"
                    />
                  ))}
                  {chat.members.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-950 flex items-center justify-center">
                      <span className="text-xs text-gray-300">+{chat.members.length - 3}</span>
                    </div>
                  )}
                </div>

                {/* Latest Message */}
                <div className="flex items-center justify-between">
                  <p className={`text-sm truncate flex-1 ${
                    chat.unread > 0 ? 'text-white font-medium' : 'text-gray-400'
                  }`}>
                    {chat.latestMessage}
                  </p>
                  {chat.unread > 0 && (
                    <div className="bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-2 flex-shrink-0">
                      {chat.unread}
                    </div>
                  )}
                </div>

                {/* Pending Bets Badge */}
                {chat.pendingBets > 0 && (
                  <div className="mt-2 inline-flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    <span>🎲</span>
                    <span>{chat.pendingBets} active bet{chat.pendingBets !== 1 ? 's' : ''}</span>
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatsList;
