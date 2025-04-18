import React from 'react';
import * as LucideIcons from 'lucide-react';
import clsx from 'clsx';

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className, onClick }) => {
  const LucideIcon = LucideIcons[name];

  return (
    <LucideIcon
      size={size}
      className={clsx('text-gray-900', className)}
      onClick={onClick}
    />
  );
};

export default Icon;