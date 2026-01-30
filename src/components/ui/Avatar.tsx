import React from 'react';
import { clsx } from 'clsx';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User',
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-[72px] h-[72px]', // From Figma
    xl: 'w-[104px] h-[104px]', // From Figma
  };

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-full bg-gray-200 object-cover',
        sizeClasses[size],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};
