import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Avatar } from '../components/ui/Avatar';

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Tanya Myroniuk',
    email: 'tanya.myroniuk@gmail.com',
    phone: '+880 000 111 333',
    dob: '12/12/1994',
    location: 'Ukraine'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saved:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-very-light relative pb-10">
      {/* Purple Header Background */}
      <div className="bg-primary-purple h-[280px] w-full rounded-b-[40px] absolute top-0 left-0 z-0 shadow-lg" />

      <div className="relative z-10 px-6 pt-12 max-w-md mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-6">
            <button onClick={() => navigate('/')} className="text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <h1 className="text-2xl font-bold text-white font-dm-sans">Profile</h1>
            <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Avatar */}
        <div className="mb-8 relative">
           <Avatar src="./assets/images/user-avatar-1.png" size="lg" className="border-4 border-white" />
           <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md cursor-pointer text-primary-purple">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
           </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input 
                label="Full Name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
            />
            <Input 
                label="Email or Phone Number" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
            />
             <Input 
                label="Phone Number" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
            />
            <Input 
                label="Birth Date" 
                name="dob" 
                value={formData.dob} 
                onChange={handleChange}
                icon={<img src="./assets/icons/calendar.svg" alt="Calendar" className="w-5 h-5" />}
            />
             <Input 
                label="Location" 
                name="location" 
                value={formData.location} 
                onChange={handleChange}
            />
            
            <div className="pt-4">
                 <Button type="submit" fullWidth>Save Changes</Button>
            </div>
        </form>

      </div>
    </div>
  );
}
