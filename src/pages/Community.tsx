import React from 'react';
import { MessageCircle, Users, Heart, Share2 } from 'lucide-react';

const discussions = [
  {
    id: 1,
    author: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Tips for Night Shift Nursing',
    content: 'Looking for advice on maintaining a healthy work-life balance during night shifts...',
    likes: 24,
    comments: 12,
    shares: 5,
  },
  {
    id: 2,
    author: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Vision Impairment',
    content: 'Challenges in life due to vision impairement',
    likes: 18,
    comments: 8,
    shares: 3,
  },
];

export function Community() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nursing Community
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Connect, share, and learn from fellow nursing students, Explore people
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <button className="flex-grow text-left px-4 py-2 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200">
                Start a discussion...
              </button>
            </div>
          </div>

          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white rounded-lg shadow-lg p-6 mb-6"
            >
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={discussion.avatar}
                  alt={discussion.author}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{discussion.author}</h3>
                  <p className="text-sm text-gray-500">Posted 2 mothns ago</p>
                </div>
                
              </div>
              <h4 className="mt-4 text-xl font-semibold">{discussion.title}</h4>
              <p className="mt-2 text-gray-600">{discussion.content}</p>
              <div className="mt-6 flex items-center space-x-6">
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>{discussion.likes}</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>{discussion.comments}</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span>{discussion.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}