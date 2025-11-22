// Mock data for StakeSocial app

export const currentUser = {
  id: 'user1',
  username: 'Alex_crypto',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  wins: 14,
  losses: 6,
  totalEarnings: 2450.50
};

export const groupChats = [
  {
    id: 'chat1',
    name: 'College Squad',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=CS',
    members: ['user1', 'user2', 'user3', 'user4'],
    memberAvatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Nevan',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Soy',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    ],
    latestMessage: 'Just placed my bet!',
    timestamp: new Date('2025-11-22T14:30:00'),
    pendingBets: 3,
    unread: 2
  },
  {
    id: 'chat2',
    name: 'Weekend Warriors',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=WW',
    members: ['user1', 'user5', 'user6'],
    memberAvatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
    ],
    latestMessage: 'Who wants to bet on the game?',
    timestamp: new Date('2025-11-22T12:15:00'),
    pendingBets: 1,
    unread: 0
  },
  {
    id: 'chat3',
    name: 'Crypto Bros',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=CB',
    members: ['user1', 'user7', 'user8', 'user9'],
    memberAvatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Jake',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan',
    ],
    latestMessage: 'BTC hit 95k! Time to settle',
    timestamp: new Date('2025-11-21T18:45:00'),
    pendingBets: 5,
    unread: 1
  },
  {
    id: 'chat4',
    name: 'Study Group',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SG',
    members: ['user1', 'user10', 'user11'],
    memberAvatars: [
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    ],
    latestMessage: 'I bet you won\'t finish on time',
    timestamp: new Date('2025-11-21T09:20:00'),
    pendingBets: 0,
    unread: 0
  }
];

export const chatMessages = {
  chat1: [
    {
      id: 'msg1',
      type: 'message',
      userId: 'user2',
      username: 'Nevan',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nevan',
      content: 'Hey guys! I have a prediction...',
      timestamp: new Date('2025-11-22T13:00:00')
    },
    {
      id: 'bet1',
      type: 'new_bet',
      betData: {
        id: 'bet1',
        title: 'Will Nevan and Soy Get Together?',
        description: 'Before the end of the semester',
        creator: 'user2',
        creatorName: 'Nevan',
        createdAt: new Date('2025-11-22T13:05:00'),
        deadline: new Date('2025-12-20T23:59:00'),
        totalPool: 0,
        status: 'open',
        sides: [
          { option: 'Yes', odds: '2:1', participants: 0 },
          { option: 'No', odds: '1:2', participants: 0 }
        ]
      }
    },
    {
      id: 'msg2',
      type: 'bet_action',
      username: 'Mike',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      content: 'placed a bet',
      timestamp: new Date('2025-11-22T13:10:00')
    },
    {
      id: 'msg3',
      type: 'bet_action',
      username: 'Alex_crypto',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      content: 'placed a bet',
      timestamp: new Date('2025-11-22T13:15:00')
    },
    {
      id: 'msg4',
      type: 'message',
      userId: 'user3',
      username: 'Soy',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Soy',
      content: 'Umm... awkward much? 😅',
      timestamp: new Date('2025-11-22T13:20:00')
    },
    {
      id: 'bet2',
      type: 'resolved_bet',
      betData: {
        id: 'bet_old1',
        title: 'Will it rain this weekend?',
        winner: 'Yes',
        resolvedAt: new Date('2025-11-22T14:00:00'),
        payouts: [
          { username: 'Alex_crypto', amount: 125.50, won: true },
          { username: 'Mike', amount: 75.00, won: true },
          { username: 'Nevan', amount: 0, won: false },
        ]
      }
    },
    {
      id: 'msg5',
      type: 'message',
      userId: 'user4',
      username: 'Mike',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      content: 'Easy money! Thanks for the ETH 💰',
      timestamp: new Date('2025-11-22T14:10:00')
    },
    {
      id: 'msg6',
      type: 'message',
      userId: 'user1',
      username: 'Alex_crypto',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      content: 'Just placed my bet!',
      timestamp: new Date('2025-11-22T14:30:00')
    }
  ]
};

export const allBets = [
  {
    id: 'bet1',
    chatId: 'chat1',
    chatName: 'College Squad',
    title: 'Will Nevan and Soy Get Together?',
    description: 'Before the end of the semester',
    creator: 'user2',
    creatorName: 'Nevan',
    createdAt: new Date('2025-11-22T13:05:00'),
    deadline: new Date('2025-12-20T23:59:00'),
    totalPool: 450,
    status: 'live',
    myPosition: { side: 'Yes', amount: 50 },
    sides: [
      { option: 'Yes', odds: '2:1', participants: 3, pool: 250 },
      { option: 'No', odds: '1:2', participants: 2, pool: 200 }
    ]
  },
  {
    id: 'bet2',
    chatId: 'chat2',
    chatName: 'Weekend Warriors',
    title: 'Will the Lakers win tonight?',
    description: 'Game vs Warriors',
    creator: 'user5',
    creatorName: 'Sarah',
    createdAt: new Date('2025-11-22T10:00:00'),
    deadline: new Date('2025-11-22T22:00:00'),
    totalPool: 300,
    status: 'live',
    myPosition: { side: 'Yes', amount: 100 },
    sides: [
      { option: 'Yes', odds: '1.5:1', participants: 2, pool: 150 },
      { option: 'No', odds: '1.5:1', participants: 2, pool: 150 }
    ]
  },
  {
    id: 'bet3',
    chatId: 'chat3',
    chatName: 'Crypto Bros',
    title: 'BTC to reach $100k by EOY?',
    description: 'Bitcoin reaching 100k by Dec 31',
    creator: 'user7',
    creatorName: 'Jake',
    createdAt: new Date('2025-11-20T09:00:00'),
    deadline: new Date('2025-12-31T23:59:00'),
    totalPool: 1200,
    status: 'live',
    myPosition: { side: 'Yes', amount: 200 },
    sides: [
      { option: 'Yes', odds: '3:1', participants: 4, pool: 800 },
      { option: 'No', odds: '1:3', participants: 2, pool: 400 }
    ]
  },
  {
    id: 'bet4',
    chatId: 'chat3',
    chatName: 'Crypto Bros',
    title: 'ETH to flip BTC in market cap?',
    description: 'The flippening happens',
    creator: 'user8',
    creatorName: 'Emma',
    createdAt: new Date('2025-11-19T14:00:00'),
    deadline: new Date('2026-01-01T00:00:00'),
    totalPool: 600,
    status: 'live',
    myPosition: { side: 'No', amount: 75 },
    sides: [
      { option: 'Yes', odds: '5:1', participants: 2, pool: 200 },
      { option: 'No', odds: '1:5', participants: 3, pool: 400 }
    ]
  }
];

export const pastBets = [
  {
    id: 'bet_old1',
    chatId: 'chat1',
    chatName: 'College Squad',
    title: 'Will it rain this weekend?',
    description: 'Saturday or Sunday',
    winner: 'Yes',
    resolvedAt: new Date('2025-11-22T14:00:00'),
    myPosition: { side: 'Yes', amount: 50, payout: 125.50 },
    totalPool: 350,
    status: 'resolved'
  },
  {
    id: 'bet_old2',
    chatId: 'chat2',
    chatName: 'Weekend Warriors',
    title: 'Will Tom show up on time?',
    description: 'To Saturday brunch',
    winner: 'No',
    resolvedAt: new Date('2025-11-21T11:00:00'),
    myPosition: { side: 'Yes', amount: 25, payout: 0 },
    totalPool: 150,
    status: 'resolved'
  }
];
