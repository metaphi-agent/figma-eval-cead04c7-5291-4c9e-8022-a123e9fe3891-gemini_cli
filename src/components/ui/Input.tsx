import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-text-subdue">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={clsx(
              'w-full h-[54px] px-4 bg-white border rounded-[15px] outline-none text-text-main placeholder:text-text-subdue',
              'transition-all duration-200',
              'focus:border-primary-purple focus:ring-1 focus:ring-primary-purple',
              error ? 'border-red-500' : 'border-gray-light',
              icon && 'pl-12', // Add padding if icon exists
              className
            )}
            {...props}
          />
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-subdue">
              {icon}
            </div>
          )}
        </div>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);
