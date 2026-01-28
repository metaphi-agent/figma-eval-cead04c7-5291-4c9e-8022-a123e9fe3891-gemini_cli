import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-200 font-sans">
      <div className="w-full max-w-[375px] bg-gray-light min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
};
