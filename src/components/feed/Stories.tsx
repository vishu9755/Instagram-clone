import React, { useState, useRef } from 'react';
import { Story } from '../../types';
import Avatar from '../ui/Avatar';
import Icon from '../ui/Icon';

interface StoriesProps {
  stories: Story[];
}

const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Approximate width of visible area
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.max(0, currentIndex - 3));
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.min(stories.length - 1, currentIndex + 3));
      }
    }
  };

  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < stories.length - 3;

  return (
    <div className="relative bg-white border border-gray-200 rounded-sm mb-4 py-4">
      {/* Left arrow for scrolling */}
      {showLeftArrow && (
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 z-10"
          onClick={() => handleScroll('left')}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
      )}
      
      {/* Stories list */}
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto px-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <Avatar 
              src={story.user.profileImage} 
              alt={story.user.username} 
              size="lg" 
              hasStory={true} 
              hasViewed={story.hasViewed} 
            />
            <span className="text-xs truncate w-16 text-center">
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
      
      {/* Right arrow for scrolling */}
      {showRightArrow && (
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 z-10"
          onClick={() => handleScroll('right')}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      )}
    </div>
  );
};

export default Stories;