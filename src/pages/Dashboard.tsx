import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../components/ui/Avatar';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-very-light flex flex-col items-center pt-10 px-6">
      <div className="w-full max-w-md flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium font-poppins text-primary-black">Profile</h1>
        <Avatar src="./assets/images/user-avatar-2.png" size="md" />
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <div 
          onClick={() => navigate('/edit')}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary-purple/10 rounded-full flex items-center justify-center text-primary-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <p className="font-medium text-primary-black">Personal Information</p>
              <p className="text-sm text-text-subdue">Edit your profile</p>
            </div>
          </div>
          <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
             <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            </div>
            <div>
              <p className="font-medium text-primary-black">Payment Methods</p>
              <p className="text-sm text-text-subdue">Manage cards</p>
            </div>
          </div>
          <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
             <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <p className="font-medium text-primary-black">Security</p>
              <p className="text-sm text-text-subdue">Change password</p>
            </div>
          </div>
          <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </div>
  );
}
