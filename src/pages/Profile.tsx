import React, { useState } from 'react';
import { User, Lock, ShieldCheck, LogOut, Bell, Heart, Users } from 'lucide-react';
import { Layout } from '../components/ui/Layout';
import { TabBar } from '../components/blocks/TabBar';
import { MenuItem } from '../components/ui/MenuItem';
import { Toggle } from '../components/ui/Toggle';

const Profile = () => {
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);

  return (
    <Layout>
      <div className="flex-1 overflow-y-auto pb-24 bg-gray-light">
        <div className="px-4 pt-12 pb-6">
           {/* Profile Title */}
           <div className="flex justify-between items-center mb-6">
             <h1 className="text-xl font-bold text-primary-black">Profile</h1>
           </div>
           
           {/* User Card */}
           <div className="bg-white rounded-[20px] p-4 shadow-sm mb-6 flex items-center justify-between relative overflow-hidden">
             <div className="flex items-center gap-4 z-10">
               <img 
                 src="./assets/images/1-151.png" 
                 alt="User" 
                 className="w-[53px] h-[53px] rounded-full object-cover"
               />
               <div className="flex flex-col">
                 <h2 className="text-lg font-bold text-primary-black">Mathew</h2>
                 <p className="text-sm text-gray-dark">Mathew@email.com</p>
               </div>
             </div>
             
             {/* "More" Button */}
             <button className="px-[10px] py-[6px] bg-gray-50 rounded text-sm font-medium text-primary-black opacity-80">
               More
             </button>
           </div>
           
           {/* Menu Section 1 */}
           <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_44px_rgba(0,0,0,0.06)] mb-6">
             <div className="flex flex-col gap-6">
               <MenuItem 
                 icon={User} 
                 title="My Account" 
                 subtitle="Make changes to your account"
                 rightElement={
                   <div className="w-3.5 h-3.5 bg-[#EC5865] rounded-full flex items-center justify-center">
                     <div className="w-0.5 h-0.5 bg-white rounded-full" />
                   </div>
                 }
               />
               <MenuItem 
                 icon={Users} 
                 title="Saved Beneficiary" 
                 subtitle="Manage your saved account"
               />
               <MenuItem 
                 icon={Lock} 
                 title="Face ID / Touch ID" 
                 subtitle="Manage your device security"
                 showChevron={false}
                 rightElement={
                   <Toggle checked={faceIdEnabled} onChange={() => setFaceIdEnabled(!faceIdEnabled)} />
                 }
               />
               <MenuItem 
                 icon={ShieldCheck} 
                 title="Two-Factor Authentication" 
                 subtitle="Further secure your account"
               />
               <MenuItem 
                 icon={LogOut} 
                 title="Log out" 
                 subtitle="Further secure your account" 
               />
             </div>
           </div>

           {/* Menu Section 2 */}
           <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_44px_rgba(0,0,0,0.06)]">
             <div className="flex flex-col gap-6">
               <MenuItem 
                 icon={Bell} 
                 title="Help & Support" 
               />
               <MenuItem 
                 icon={Heart} 
                 title="About App" 
               />
             </div>
           </div>
        </div>
      </div>
      <TabBar />
    </Layout>
  );
};

export default Profile;
