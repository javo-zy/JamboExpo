import React from 'react';
import Logo from './logo';
import SidebarNav from './Sidebar';
import PersonalForm from './personalForm';
import ProfilePicture from './ProfilePictures';
import FooterActions from './footerActions';
import TopNavBar from './topBar'; // Import the new TopNavBar

const SettingsLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40"> {/* Adjusted z-index if TopNavBar also becomes sticky */}
        <div className="container mx-auto px-6 py-3">
          <Logo className="h-8" /> {/* Ensure appropriate height for the image logo */}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4">
            <SidebarNav />
          </div>

          {/* Center Content */}
          <div className="w-full lg:w-1/2 bg-zinc-100 p-6 rounded-lg shadow">
            <PersonalForm />
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/4">
            <ProfilePicture />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 shadow-inner sticky bottom-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <FooterActions />
        </div>
      </footer>
    </div>
  );
};

export default SettingsLayout;