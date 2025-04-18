import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';
import Icon from '../ui/Icon';

interface ExploreGridProps {
  posts: Post[];
}

const ExploreGrid: React.FC<ExploreGridProps> = ({ posts }) => {
  return (
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
  );
};

export default ExploreGrid;