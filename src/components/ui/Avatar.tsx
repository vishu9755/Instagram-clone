import React from 'react';
import clsx from 'clsx';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  hasStory?: boolean;
  hasViewed?: boolean;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  hasStory = false, 
  hasViewed = true, 
  className 
}) => {
  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const ringColor = hasViewed ? 'ring-gray-300' : 'ring-gradient-to-tr from-yellow-400 to-pink-500';
  const ringSize = hasStory ? 'ring-2 p-0.5' : '';

  return (
    <div className={clsx(
      sizeClasses[size],
      hasStory && 'p-0.5',
      hasStory && !hasViewed && 'bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full',
      hasStory && hasViewed && 'ring-2 ring-gray-300 rounded-full',
      className
    )}>
      <img
        src={src}
        alt={alt}
        className="rounded-full w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;