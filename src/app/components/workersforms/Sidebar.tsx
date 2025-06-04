import React, { useState } from 'react';

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
        ${isActive 
          ? 'bg-red-600 text-white' 
          : 'text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
        }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </button>
  );
};

const SidebarNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Personal');
  const navItems = ['Personal', 'Privacy', 'Notifications'];

  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-1">Settings</h2>
      <p className="text-sm text-gray-500 mb-6">Worker Portal</p>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item}
            label={item}
            isActive={activeItem === item}
            onClick={() => setActiveItem(item)}
          />
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;