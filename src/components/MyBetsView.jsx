import React from 'react';
import { allBets, groupChats } from '../data/mockData';

const MyBetsView = () => {
  // Group bets by chat
  const betsByChat = allBets.reduce((acc, bet) => {
    if (!acc[bet.chatId]) {
      const chat = groupChats.find(c => c.id === bet.chatId);
      acc[bet.chatId] = {
        chatName: bet.chatName,
        chatAvatar: chat?.avatar,
        bets: []
      };
    }
    acc[bet.chatId].bets.push(bet);
    return acc;
  }, {});

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const calculatePotentialWin = (bet) => {
    if (!bet.myPosition) return 0;
    const side = bet.sides.find(s => s.option === bet.myPosition.side);
    if (!side) return 0;
    const [win, stake] = side.odds.split(':').map(Number);
    return bet.myPosition.amount * (win / stake);
  };

  const BetCard = ({ bet }) => {
    const potentialWin = calculatePotentialWin(bet);

    return (
      <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-white text-sm flex-1 pr-2">{bet.title}</h3>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded px-2 py-0.5 flex-shrink-0">
            <span className="text-xs text-purple-400 font-medium">
              {bet.myPosition.side}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">{bet.description}</p>

        <div className="grid grid-cols-3 gap-2 mb-2">
          <div className="bg-gray-900/50 rounded p-2">
            <div className="text-xs text-gray-500 mb-0.5">Stake</div>
            <div className="text-sm font-semibold text-white">${bet.myPosition.amount}</div>
          </div>
          <div className="bg-gray-900/50 rounded p-2">
            <div className="text-xs text-gray-500 mb-0.5">Potential</div>
            <div className="text-sm font-semibold text-green-400">
              ${(bet.myPosition.amount + potentialWin).toFixed(0)}
            </div>
          </div>
          <div className="bg-gray-900/50 rounded p-2">
            <div className="text-xs text-gray-500 mb-0.5">Pool</div>
            <div className="text-sm font-semibold text-white">${bet.totalPool}</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Deadline: {formatDate(bet.deadline)}</span>
          <button className="text-purple-400 hover:text-purple-300 font-medium">
            View →
          </button>
        </div>
      </div>
    );
  };

  const totalStaked = allBets.reduce((sum, bet) => sum + (bet.myPosition?.amount || 0), 0);
  const totalPotential = allBets.reduce((sum, bet) => {
    const potential = calculatePotentialWin(bet);
    return sum + (bet.myPosition?.amount || 0) + potential;
  }, 0);

  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 px-4 py-4 border-b border-gray-800 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-white mb-3">My Active Bets</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Total Staked</div>
            <div className="text-xl font-bold text-white">${totalStaked}</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Potential Win</div>
            <div className="text-xl font-bold text-green-400">${totalPotential.toFixed(0)}</div>
          </div>
        </div>
      </div>

      {/* Bets grouped by chat */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 space-y-4">
        {Object.keys(betsByChat).length > 0 ? (
          Object.entries(betsByChat).map(([chatId, chatData]) => (
            <div key={chatId} className="space-y-3">
              {/* Chat Header */}
              <div className="flex items-center gap-2">
                <img
                  src={chatData.chatAvatar}
                  alt={chatData.chatName}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-white text-sm">{chatData.chatName}</h2>
                  <p className="text-xs text-gray-500">
                    {chatData.bets.length} active bet{chatData.bets.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Bets in this chat */}
              <div className="space-y-2">
                {chatData.bets.map(bet => (
                  <BetCard key={bet.id} bet={bet} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🎲</div>
            <p className="text-gray-400 mb-2">No active bets</p>
            <p className="text-sm text-gray-500">Start betting in your group chats!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBetsView;
