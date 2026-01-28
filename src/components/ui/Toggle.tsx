import React from 'react';

export const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
  return (
    <div 
      className={`w-[51px] h-[30px] rounded-full flex items-center px-1 cursor-pointer transition-colors duration-200 ${checked ? 'bg-green-500' : 'bg-[#E8E8E8]'}`}
      onClick={onChange}
    >
      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${checked ? 'translate-x-[21px]' : 'translate-x-0'}`} />
    </div>
  );
};
