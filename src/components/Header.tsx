import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, BookOpen, Users } from 'lucide-react';

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Stethoscope className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Sonivale</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/learning-modules"
              icon={<BookOpen className="h-5 w-5" />}
              text="Learning Modules"
              isActive={location.pathname === '/learning-modules'}
            />
            <NavLink
              to="/community"
              icon={<Users className="h-5 w-5" />}
              text="Community"
              isActive={location.pathname === '/community'}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, icon, text, isActive }: { to: string; icon: React.ReactNode; text: string; isActive: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center ${
        isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
      } transition-colors duration-200`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
}
