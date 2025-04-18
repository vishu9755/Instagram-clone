import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

interface SuggestionsProps {
  users: User[];
  currentUser: User;
}

const Suggestions: React.FC<SuggestionsProps> = ({ users, currentUser }) => {
  return (
    <div className="hidden lg:block w-80 pt-8">
      {/* Current user info */}
      <div className="flex items-center mb-5">
        <Link to="/profile">
          <Avatar 
            src={currentUser.profileImage} 
            alt={currentUser.username} 
            size="lg"
          />
        </Link>
        <div className="ml-4">
          <Link to="/profile" className="font-semibold text-sm">
            {currentUser.username}
          </Link>
          <p className="text-gray-500 text-sm">{currentUser.fullName}</p>
        </div>
      </div>
      
      {/* Suggestions header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 font-semibold text-sm">Suggestions For You</h3>
        <Link to="/explore/people" className="text-xs font-semibold">
          See All
        </Link>
      </div>
      
      {/* Suggested users */}
      <div className="space-y-3">
        {users.filter(user => !user.isFollowing && user.id !== currentUser.id).slice(0, 5).map(user => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to={`/profile/${user.username}`}>
                <Avatar 
                  src={user.profileImage} 
                  alt={user.username} 
                  size="sm"
                />
              </Link>
              <div className="ml-3">
                <Link to={`/profile/${user.username}`} className="font-semibold text-sm">
                  {user.username}
                </Link>
                <p className="text-gray-500 text-xs">Suggested for you</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blue-500 font-semibold text-xs"
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
      
      {/* Footer links */}
      <div className="mt-8 text-xs text-gray-400">
        <div className="flex flex-wrap gap-x-1 gap-y-1 mb-3">
          <a href="#" className="hover:underline">About</a>
          <span>·</span>
          <a href="#" className="hover:underline">Help</a>
          <span>·</span>
          <a href="#" className="hover:underline">Press</a>
          <span>·</span>
          <a href="#" className="hover:underline">API</a>
          <span>·</span>
          <a href="#" className="hover:underline">Jobs</a>
          <span>·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span>
          <a href="#" className="hover:underline">Locations</a>
          <span>·</span>
          <a href="#" className="hover:underline">Language</a>
        </div>
        <p className="text-xs text-gray-400">© 2025 INSTAGRAM CLONE</p>
      </div>
    </div>
  );
};

export default Suggestions;