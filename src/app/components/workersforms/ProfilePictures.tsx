import React from 'react';

const ProfilePicture: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h3 className="text-md font-semibold text-gray-800 mb-1">My profile picture</h3>
      <p className="text-xs text-gray-500 mb-6">Add an image for others to recognize you</p>
      
      <div className="flex justify-center items-center mb-6">
        <div 
          className="w-36 h-36 sm:w-40 sm:h-40 bg-gray-300 rounded-full flex items-center justify-center"
          role="img"
          aria-label="Current profile picture placeholder"
        >
          {/* Placeholder for image or icon */}
        </div>
      </div>
      
      <button 
        type="button"
        className="w-full bg-red-600 text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-150 ease-in-out"
      >
        Update photo
      </button>
    </div>
  );
};

export default ProfilePicture;