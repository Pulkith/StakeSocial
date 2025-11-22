import React from 'react';
import { groupChats, chatMessages } from '../data/mockData';

const ChatView = ({ chatId, onBack, onViewAllBets }) => {
  const chat = groupChats.find(c => c.id === chatId);
  const messages = chatMessages[chatId] || [];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const NewBetCard = ({ betData }) => (
    <div className="mx-4 my-3">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-[2px]">
        <div className="bg-gray-900 rounded-2xl p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="text-xs text-purple-400 font-medium mb-1">NEW BET</div>
              <h3 className="text-lg font-bold text-white mb-1">{betData.title}</h3>
              <p className="text-sm text-gray-400">{betData.description}</p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">Created by</span>
              <span className="text-white font-medium">{betData.creatorName}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Deadline</span>
              <span className="text-white font-medium">{formatDate(betData.deadline)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {betData.sides.map((side, idx) => (
              <button
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors border border-gray-700 hover:border-purple-500"
              >
                <div className="text-white font-semibold mb-1">{side.option}</div>
                <div className="text-xs text-gray-400">Odds: {side.odds}</div>
              </button>
            ))}
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all">
            Place Bet
          </button>
        </div>
      </div>
    </div>
  );

  const BetActionMessage = ({ username, avatar, content, timestamp }) => (
    <div className="mx-4 my-2 flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-lg">
      <img src={avatar} alt={username} className="w-6 h-6 rounded-full" />
      <span className="text-sm text-gray-300">
        <span className="font-semibold text-purple-400">{username}</span> {content}
      </span>
      <span className="text-xs text-gray-500 ml-auto">{formatTime(timestamp)}</span>
    </div>
  );

  const ResolvedBetCard = ({ betData }) => (
    <div className="mx-4 my-3">
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-[2px]">
        <div className="bg-gray-900 rounded-2xl p-4">
          <div className="text-xs text-green-400 font-medium mb-1">BET RESOLVED</div>
          <h3 className="text-lg font-bold text-white mb-3">{betData.title}</h3>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-3">
            <div className="text-center">
              <div className="text-sm text-green-400 mb-1">Winning Side</div>
              <div className="text-2xl font-bold text-white">{betData.winner}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Payouts</div>
            {betData.payouts.map((payout, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-2 rounded-lg ${
                  payout.won ? 'bg-green-500/10' : 'bg-gray-800/50'
                }`}
              >
                <span className="text-sm text-white font-medium">{payout.username}</span>
                <span className={`text-sm font-bold ${
                  payout.won ? 'text-green-400' : 'text-red-400'
                }`}>
                  {payout.won ? '+' : '-'}${payout.amount.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const RegularMessage = ({ message }) => (
    <div className="mx-4 my-2 flex items-start gap-2">
      <img src={message.avatar} alt={message.username} className="w-8 h-8 rounded-full flex-shrink-0 mt-1" />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm font-semibold text-white">{message.username}</span>
          <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
        </div>
        <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-2 inline-block">
          <p className="text-sm text-gray-100">{message.content}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-purple-400 hover:text-purple-300 text-xl"
          >
            ←
          </button>
          <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full" />
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-white truncate">{chat.name}</h2>
            <p className="text-xs text-gray-400">{chat.members.length} members</p>
          </div>
          <button
            onClick={onViewAllBets}
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors"
          >
            View Bets
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pb-20 pt-4">
        {messages.map(msg => {
          if (msg.type === 'new_bet') {
            return <NewBetCard key={msg.id} betData={msg.betData} />;
          } else if (msg.type === 'bet_action') {
            return (
              <BetActionMessage
                key={msg.id}
                username={msg.username}
                avatar={msg.avatar}
                content={msg.content}
                timestamp={msg.timestamp}
              />
            );
          } else if (msg.type === 'resolved_bet') {
            return <ResolvedBetCard key={msg.id} betData={msg.betData} />;
          } else {
            return <RegularMessage key={msg.id} message={msg} />;
          }
        })}
      </div>

      {/* Input */}
      <div className="bg-gray-900 border-t border-gray-800 px-4 py-3 sticky bottom-16">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
