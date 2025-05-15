import { HiBell, HiMenuAlt1, HiSearch, HiChevronDown, HiOutlineLogout } from 'react-icons/hi';
import { useState } from 'react';

type Props = {
  onToggleMenu: () => void;
};

export const Header = ({ onToggleMenu }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true); // Change this based on your logic

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="flex items-center justify-between w-full px-2 md:px-6 py-4">
        {/* Mobile menu button */}
        <button 
          onClick={onToggleMenu}
          className="md:hidden p-1 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <HiMenuAlt1 className="h-5 w-5" />
        </button>

        {/* Search bar */}
        <div className="flex items-center flex-1 md:ml-6">
          <div className="relative max-w-xs md:w-full mx-auto md:mx-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-[80%] md:w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search courses..."
            />
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4 ml-4">
          {/* Notification dropdown */}
          <div className="relative">
            <button 
              className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 relative"
              onClick={toggleDropdown}
            >
              <HiBell className="h-6 w-6" />
              {hasNotifications && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-800"></span>
              )}
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-700 rounded-lg shadow-lg py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-600">
                  <p className="text-sm font-medium text-white">Notifications</p>
                </div>
                <div className="px-4 py-3 text-sm text-gray-300">
                  <p>You have 3 new notifications</p>
                  {/* You can map through notifications here */}
                </div>
                <button
                  onClick={() => {
                    // Add your logout logic here
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  <HiOutlineLogout className="mr-2 h-5 w-5" />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Profile dropdown - alternative approach */}
          <div className="hidden md:block relative">
            <button
              className="flex items-center text-sm text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleDropdown}
            >
              <span>User Name</span>
              <HiChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};