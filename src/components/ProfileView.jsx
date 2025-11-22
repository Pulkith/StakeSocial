import React from 'react';
import { currentUser, allBets, pastBets } from '../data/mockData';

const ProfileView = () => {
  const totalBets = allBets.length + pastBets.length;
  const winRate = totalBets > 0 ? ((currentUser.wins / (currentUser.wins + currentUser.losses)) * 100).toFixed(1) : 0;
  const activeBetsValue = allBets.reduce((sum, bet) => sum + (bet.myPosition?.amount || 0), 0);

  const stats = [
    { label: 'Win Rate', value: `${winRate}%`, color: 'text-green-400' },
    { label: 'Total Bets', value: totalBets, color: 'text-blue-400' },
    { label: 'Active Bets', value: allBets.length, color: 'text-purple-400' },
  ];

  const achievements = [
    { icon: '🔥', title: 'Hot Streak', description: '5 wins in a row' },
    { icon: '💎', title: 'Diamond Hands', description: 'Won bet with 5:1 odds' },
    { icon: '🎯', title: 'Sharp Shooter', description: '10+ total wins' },
    { icon: '💰', title: 'Big Winner', description: 'Won $500+ in single bet' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 px-4 pt-6 pb-8 border-b border-gray-800">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <img
                src={currentUser.avatar}
                alt={currentUser.username}
                className="w-full h-full rounded-full bg-gray-900"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-950"></div>
          </div>

          {/* Username */}
          <h1 className="text-2xl font-bold text-white mb-1">{currentUser.username}</h1>
          <p className="text-sm text-gray-400 mb-4">Member since Nov 2024</p>

          {/* Win/Loss Record */}
          <div className="bg-gray-800 rounded-lg px-6 py-3 inline-flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{currentUser.wins}</div>
              <div className="text-xs text-gray-400">Wins</div>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{currentUser.losses}</div>
              <div className="text-xs text-gray-400">Losses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 space-y-6">
        {/* Stats Grid */}
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Statistics
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings */}
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Earnings
          </h2>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm text-gray-300">Total Earnings</span>
              <span className="text-3xl font-bold text-white">
                ${currentUser.totalEarnings.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Active Stakes</span>
              <span className="text-purple-400 font-semibold">${activeBetsValue}</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Achievements
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-purple-500 transition-colors"
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="font-semibold text-white text-sm mb-1">
                  {achievement.title}
                </div>
                <div className="text-xs text-gray-400">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button className="w-full bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-between px-4">
            <span>Transaction History</span>
            <span>→</span>
          </button>
          <button className="w-full bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-between px-4">
            <span>Settings</span>
            <span>→</span>
          </button>
          <button className="w-full bg-gray-900 hover:bg-gray-800 border border-red-800/50 text-red-400 font-medium py-3 rounded-lg transition-colors flex items-center justify-between px-4">
            <span>Sign Out</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
