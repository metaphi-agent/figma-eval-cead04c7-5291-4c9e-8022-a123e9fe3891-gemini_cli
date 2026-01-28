import { Home, User, ShieldCheck, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const TabBar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="absolute bottom-0 left-0 w-full h-[83px] bg-white flex items-center justify-around pb-5 rounded-t-[20px] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50">
      <Link to="/" className={`p-2 transition-colors duration-200 ${isActive('/') ? 'text-primary-black' : 'text-gray-300'}`}>
        <Home size={24} fill={isActive('/') ? "currentColor" : "none"} />
      </Link>
      <Link to="/verify" className={`p-2 transition-colors duration-200 ${isActive('/verify') ? 'text-primary-black' : 'text-gray-300'}`}>
        <ShieldCheck size={24} fill={isActive('/verify') ? "currentColor" : "none"} />
      </Link>
      <Link to="/profile" className={`p-2 transition-colors duration-200 ${isActive('/profile') ? 'text-primary-black' : 'text-gray-300'}`}>
        <User size={24} fill={isActive('/profile') ? "currentColor" : "none"} />
      </Link>
      <Link to="/logout" className={`p-2 transition-colors duration-200 ${isActive('/logout') ? 'text-primary-black' : 'text-gray-300'}`}>
        <LogOut size={24} />
      </Link>
    </div>
  );
};
