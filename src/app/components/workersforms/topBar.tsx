import React from 'react';

const TopNavBar: React.FC = () => {
  const navItems = ['Home', 'Notifications', 'Configuration'];

  return (
    <nav className="bg-white py-3 shadow-sm">
      <div className="container mx-auto px-8 flex items-center justify-end space-x-9"> {/* Added justify-end */}
        {navItems.map((item) => (
          <a
            key={item}
            href="#" // Placeholder href, should be replaced with actual routes
            className="text-gray-700 hover:text-red-600 transition-colors duration-150 ease-in-out text-sm font-medium"
            aria-label={item}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TopNavBar;