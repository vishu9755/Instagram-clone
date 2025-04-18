import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../ui/Icon';
import Avatar from '../ui/Avatar';
import { mockUsers } from '../../data/mockData';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const currentUser = mockUsers[0]; // For demonstration purposes
  
  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center h-14">
        <Link to="/" className="flex flex-col items-center">
          <Icon 
            name={location.pathname === '/' ? 'Home' : 'Home'} 
            className={location.pathname === '/' ? 'text-black' : 'text-gray-500'} 
            size={24} 
          />
        </Link>
        
        <Link to="/explore" className="flex flex-col items-center">
          <Icon 
            name={location.pathname === '/explore' ? 'Compass' : 'Compass'} 
            className={location.pathname === '/explore' ? 'text-black' : 'text-gray-500'} 
            size={24} 
          />
        </Link>
        
        <Link to="/create" className="flex flex-col items-center">
          <Icon 
            name="PlusSquare" 
            className={location.pathname === '/create' ? 'text-black' : 'text-gray-500'} 
            size={24} 
          />
        </Link>
        
        <Link to="/activity" className="flex flex-col items-center">
          <Icon 
            name={location.pathname === '/activity' ? 'Heart' : 'Heart'} 
            className={location.pathname === '/activity' ? 'text-black' : 'text-gray-500'} 
            size={24} 
          />
        </Link>
        
        <Link to="/profile" className="flex flex-col items-center">
          <div className={location.pathname === '/profile' ? 'border-2 border-black rounded-full' : ''}>
            <Avatar 
              src={currentUser.profileImage} 
              alt={currentUser.username} 
              size="xs" 
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;