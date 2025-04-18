import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../ui/Icon';
import Avatar from '../ui/Avatar';
import { mockUsers } from '../../data/mockData';

const Header: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const currentUser = mockUsers[0]; // For demonstration, we'll use the first user as the current user

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo for desktop */}
        <div className="hidden md:block">
          <Link to="/" className="text-xl font-semibold">Instagram</Link>
        </div>
        
        {/* Page title for mobile */}
        <div className="md:hidden">
          {location.pathname === '/' && <h1 className="text-lg font-semibold">Instagram</h1>}
          {location.pathname === '/explore' && <h1 className="text-lg font-semibold">Explore</h1>}
          {location.pathname === '/profile' && <h1 className="text-lg font-semibold">{currentUser.username}</h1>}
          {location.pathname === '/create' && <h1 className="text-lg font-semibold">New Post</h1>}
        </div>
        
        {/* Search bar - desktop only */}
        <div className="hidden md:block relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="Search" size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-lg py-1.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Navigation icons - desktop only */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/" className={location.pathname === '/' ? 'text-black' : 'text-gray-500'}>
            <Icon name="Home" size={24} />
          </Link>
          <Link to="/messages" className={location.pathname === '/messages' ? 'text-black' : 'text-gray-500'}>
            <Icon name="MessageCircle" size={24} />
          </Link>
          <Link to="/create" className={location.pathname === '/create' ? 'text-black' : 'text-gray-500'}>
            <Icon name="PlusSquare" size={24} />
          </Link>
          <Link to="/explore" className={location.pathname === '/explore' ? 'text-black' : 'text-gray-500'}>
            <Icon name="Compass" size={24} />
          </Link>
          <Link to="/activity" className={location.pathname === '/activity' ? 'text-black' : 'text-gray-500'}>
            <Icon name="Heart" size={24} />
          </Link>
          <Link to="/profile" className="ml-2">
            <Avatar src={currentUser.profileImage} alt={currentUser.username} size="sm" />
          </Link>
        </div>

        {/* Mobile icons */}
        <div className="md:hidden flex items-center space-x-4">
          {location.pathname === '/' && (
            <>
              <Link to="/messages">
                <Icon name="MessageCircle" size={24} />
              </Link>
              <Link to="/create">
                <Icon name="PlusSquare" size={24} />
              </Link>
            </>
          )}
          
          {location.pathname === '/profile' && (
            <>
              <Link to="/create">
                <Icon name="PlusSquare" size={24} />
              </Link>
              <button>
                <Icon name="Menu" size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;