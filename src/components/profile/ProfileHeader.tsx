import React, { useState } from 'react';
import { User } from '../../types';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface ProfileHeaderProps {
  user: User;
  postsCount: number;
  isCurrentUser: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, postsCount, isCurrentUser }) => {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const [followersCount, setFollowersCount] = useState(user.followers);
  
  const handleFollowToggle = () => {
    if (isFollowing) {
      setFollowersCount(followersCount - 1);
    } else {
      setFollowersCount(followersCount + 1);
    }
    setIsFollowing(!isFollowing);
  };
  
  return (
    <div className="px-4 pt-4 pb-10 border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start md:w-1/3">
          <Avatar 
            src={user.profileImage} 
            alt={user.username} 
            size="xl" 
          />
        </div>
        
        {/* User info */}
        <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row md:items-center">
            <h1 className="text-xl font-light mb-4 md:mb-0">{user.username}</h1>
            
            {isCurrentUser ? (
              <div className="md:ml-4 flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="font-semibold"
                >
                  Edit Profile
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                >
                  <Icon name="Settings" size={18} />
                </Button>
              </div>
            ) : (
              <div className="md:ml-4 flex space-x-2">
                <Button 
                  variant={isFollowing ? 'outline' : 'primary'} 
                  size="sm"
                  className="font-semibold"
                  onClick={handleFollowToggle}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="font-semibold"
                >
                  Message
                </Button>
              </div>
            )}
          </div>
          
          {/* Stats - desktop */}
          <div className="hidden md:flex space-x-8 my-4">
            <div>
              <span className="font-semibold">{postsCount}</span> posts
            </div>
            <div>
              <span className="font-semibold">{followersCount}</span> followers
            </div>
            <div>
              <span className="font-semibold">{user.following}</span> following
            </div>
          </div>
          
          {/* Bio */}
          <div className="mt-4">
            <h2 className="font-semibold">{user.fullName}</h2>
            <p className="text-sm whitespace-pre-line">{user.bio}</p>
          </div>
        </div>
      </div>
      
      {/* Stats - mobile */}
      <div className="grid grid-cols-3 text-center border-t border-gray-200 mt-4 pt-3 md:hidden">
        <div className="flex flex-col">
          <span className="font-semibold">{postsCount}</span>
          <span className="text-gray-500 text-sm">posts</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{followersCount}</span>
          <span className="text-gray-500 text-sm">followers</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{user.following}</span>
          <span className="text-gray-500 text-sm">following</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;