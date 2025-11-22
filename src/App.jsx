import { useState } from 'react';
import BottomNav from './components/BottomNav';
import ChatsList from './components/ChatsList';
import ChatView from './components/ChatView';
import AllBetsView from './components/AllBetsView';
import MyBetsView from './components/MyBetsView';
import ProfileView from './components/ProfileView';

function App() {
  const [currentTab, setCurrentTab] = useState('chats');
  const [currentView, setCurrentView] = useState('main'); // 'main', 'chat', 'allBets'
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    setCurrentView('chat');
  };

  const handleBack = () => {
    setCurrentView('main');
    setSelectedChatId(null);
  };

  const handleViewAllBets = () => {
    setCurrentView('allBets');
  };

  const renderContent = () => {
    // Sub-views (chat view, all bets view)
    if (currentView === 'chat' && selectedChatId) {
      return (
        <ChatView
          chatId={selectedChatId}
          onBack={handleBack}
          onViewAllBets={handleViewAllBets}
        />
      );
    }

    if (currentView === 'allBets') {
      return <AllBetsView chatId={selectedChatId} onBack={handleBack} />;
    }

    // Main tab views
    switch (currentTab) {
      case 'chats':
        return <ChatsList onChatSelect={handleChatSelect} />;
      case 'bets':
        return <MyBetsView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <ChatsList onChatSelect={handleChatSelect} />;
    }
  };

  return (
    <div className="h-screen bg-gray-950 text-white">
      <main className="h-full">
        {renderContent()}
      </main>
      <BottomNav currentTab={currentTab} onTabChange={(tab) => {
        setCurrentTab(tab);
        setCurrentView('main');
        setSelectedChatId(null);
      }} />
    </div>
  );
}

export default App;
