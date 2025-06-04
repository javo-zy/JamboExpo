import React from 'react';

const FooterActions: React.FC = () => {
  return (
    <div className="flex justify-end space-x-3">
      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-150 ease-in-out"
      >
        Cancel
      </button>
      <button
        type="submit" // Assuming this would eventually be part of a form
        className="px-7 py-2.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-150 ease-in-out"
      >
        Save
      </button>
    </div>
  );
};

export default FooterActions;
