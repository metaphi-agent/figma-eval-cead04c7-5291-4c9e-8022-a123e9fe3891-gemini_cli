import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MenuItemProps {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  showChevron?: boolean;
  rightElement?: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

export const MenuItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  onClick, 
  showChevron = true,
  rightElement,
  iconBgColor = "bg-[#E6E6F2]", 
  iconColor = "text-[#0600B3]",
  className = ""
}: MenuItemProps) => {
  return (
    <div className={`flex items-center justify-between py-3 cursor-pointer ${className}`} onClick={onClick}>
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center shrink-0`}>
          <Icon size={20} className={iconColor} />
        </div>
        <div>
          <h3 className="text-[13px] font-medium text-primary-black leading-5">{title}</h3>
          {subtitle && (
            <p className="text-[11px] text-gray-dark leading-4 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {rightElement}
        {showChevron && <ChevronRight size={16} className="text-[#ABABB5]" />}
      </div>
    </div>
  );
};
