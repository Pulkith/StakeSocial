import React, { useState } from 'react';
import { allBets, pastBets } from '../data/mockData';

const AllBetsView = ({ chatId, onBack }) => {
  const [activeTab, setActiveTab] = useState('live');

  const filteredLiveBets = chatId
    ? allBets.filter(bet => bet.chatId === chatId)
    : allBets;

  const filteredPastBets = chatId
    ? pastBets.filter(bet => bet.chatId === chatId)
    : pastBets;

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const BetCard = ({ bet }) => (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-purple-500 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="text-xs text-purple-400 font-medium mb-1">{bet.chatName}</div>
          <h3 className="font-semibold text-white mb-1">{bet.title}</h3>
          <p className="text-sm text-gray-400">{bet.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {bet.sides.map((side, idx) => (
          <div
            key={idx}
            className={`bg-gray-800 rounded-lg p-2 border ${
              bet.myPosition?.side === side.option
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-gray-700'
            }`}
          >
            <div className="text-sm font-semibold text-white mb-1">{side.option}</div>
            <div className="text-xs text-gray-400">
              {side.odds} • {side.participants} bet{side.participants !== 1 ? 's' : ''}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-xs text-gray-400">Pool</div>
            <div className="text-sm font-semibold text-white">${bet.totalPool}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Deadline</div>
            <div className="text-sm font-semibold text-white">{formatDate(bet.deadline)}</div>
          </div>
        </div>
        {bet.myPosition && (
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-1">
            <div className="text-xs text-purple-400 font-medium">
              Your bet: ${bet.myPosition.amount}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const PastBetCard = ({ bet }) => (
    <div className={`rounded-xl p-4 border ${
      bet.myPosition?.payout > 0
        ? 'bg-green-500/5 border-green-500/20'
        : 'bg-red-500/5 border-red-500/20'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="text-xs text-gray-400 font-medium mb-1">{bet.chatName}</div>
          <h3 className="font-semibold text-white mb-1">{bet.title}</h3>
          <p className="text-sm text-gray-400">{bet.description}</p>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-3 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Winner</span>
          <span className="text-sm font-semibold text-green-400">{bet.winner}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Resolved</span>
          <span className="text-sm text-gray-300">{formatDate(bet.resolvedAt)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
        <div>
          <div className="text-xs text-gray-400">Your bet</div>
          <div className="text-sm font-medium text-white">
            {bet.myPosition.side} • ${bet.myPosition.amount}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">Result</div>
          <div className={`text-lg font-bold ${
            bet.myPosition.payout > 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {bet.myPosition.payout > 0 ? '+' : '-'}${Math.abs(bet.myPosition.payout || bet.myPosition.amount).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="text-purple-400 hover:text-purple-300 text-xl"
          >
            ←
          </button>
          <h2 className="font-bold text-white text-lg">
            {chatId ? 'Chat Bets' : 'All Bets'}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('live')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'live'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            Live ({filteredLiveBets.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'past'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            Past ({filteredPastBets.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 space-y-3">
        {activeTab === 'live' ? (
          filteredLiveBets.length > 0 ? (
            filteredLiveBets.map(bet => <BetCard key={bet.id} bet={bet} />)
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">🎲</div>
              <p className="text-gray-400">No active bets</p>
            </div>
          )
        ) : (
          filteredPastBets.length > 0 ? (
            filteredPastBets.map(bet => <PastBetCard key={bet.id} bet={bet} />)
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">📊</div>
              <p className="text-gray-400">No past bets</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllBetsView;
