import React from 'react'

const dummyChatData = [
  {
    id: 1,
    sender: 'Alice',
    message: 'Hey, how are you doing today?',
    timestamp: '10:30 AM',
    avatar: 'https://ui-avatars.com/api/?name=Alice'
  },
  {
    id: 2,
    sender: 'You',
    message: 'I\'m great, thanks for asking! How about you?',
    timestamp: '10:32 AM',
    avatar: 'https://ui-avatars.com/api/?name=You'
  },
  {
    id: 3,
    sender: 'Alice',
    message: 'Doing well! Want to grab coffee later?',
    timestamp: '10:35 AM',
    avatar: 'https://ui-avatars.com/api/?name=Alice'
  },
  {
    id: 4,
    sender: 'You',
    message: 'Sure! How about the cafe downtown?',
    timestamp: '10:37 AM',
    avatar: 'https://ui-avatars.com/api/?name=You'
  }
]

const MessagePage = () => {
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="space-y-4">
        {dummyChatData.map((chat) => (
          <div 
            key={chat.id} 
            className={`flex items-start space-x-3 ${chat.sender === 'You' ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <img 
              src={chat.avatar} 
              alt={chat.sender} 
              className="w-10 h-10 rounded-full"
            />
            <div className={`p-3 rounded-lg ${chat.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              <p className="text-sm font-semibold">{chat.sender}</p>
              <p>{chat.message}</p>
              <p className="text-xs opacity-70 mt-1">{chat.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessagePage