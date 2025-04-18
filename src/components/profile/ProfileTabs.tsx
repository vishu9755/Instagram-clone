import React, { useState } from 'react';
import Icon from '../ui/Icon';
import { Post } from '../../types';
import { Link } from 'react-router-dom';

interface ProfileTabsProps {
  posts: Post[];
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ posts }) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'tagged'>('posts');
  
  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-around border-t border-gray-200">
        <button 
          className={`flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider border-t ${activeTab === 'posts' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}
          onClick={() => setActiveTab('posts')}
        >
          <Icon name="Grid" size={12} className="mr-1" />
          Posts
        </button>
        <button 
          className={`flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider border-t ${activeTab === 'saved' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}
          onClick={() => setActiveTab('saved')}
        >
          <Icon name="Bookmark" size={12} className="mr-1" />
          Saved
        </button>
        <button 
          className={`flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider border-t ${activeTab === 'tagged' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}
          onClick={() => setActiveTab('tagged')}
        >
          <Icon name="Tag" size={12} className="mr-1" />
          Tagged
        </button>
      </div>
      
      {/* Content */}
      <div className="pb-4">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {posts.map(post => (
              <Link 
                key={post.id} 
                to={`/p/${post.id}`} 
                className="relative aspect-square group"
              >
                <img 
                  src={post.image} 
                  alt={post.caption} 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
                  <div className="flex space-x-4 text-white">
                    <div className="flex items-center">
                      <Icon name="Heart" size={20} className="mr-1 fill-white" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MessageCircle" size={20} className="mr-1 fill-white" />
                      <span className="font-semibold">{post.comments.length}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {activeTab === 'saved' && (
          <div className="flex items-center justify-center h-40 text-gray-500">
            <p>No saved posts yet</p>
          </div>
        )}
        
        {activeTab === 'tagged' && (
          <div className="flex items-center justify-center h-40 text-gray-500">
            <p>No tagged posts yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;