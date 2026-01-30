import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: 'primary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fullWidth = false,
  variant = 'primary',
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center font-bold text-base transition-colors duration-200 cursor-pointer',
        'h-[55px] rounded-[15px]', // Height from Figma, assumed radius
        fullWidth && 'w-full',
        variant === 'primary' && 'bg-primary-purple text-white hover:bg-opacity-90 active:scale-[0.98]',
        variant === 'outline' && 'border border-primary-purple text-primary-purple hover:bg-primary-purple/10',
        (disabled || isLoading) && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
