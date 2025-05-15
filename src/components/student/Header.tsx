import { HiBell, HiSearch } from 'react-icons/hi';

export const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search courses..."
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
            <HiBell className="h-6 w-6" />
          </button>
          
          <div className="relative">
            <button
            //   onClick={() => signOut()}
              className="flex items-center space-x-2 text-gray-400 hover:text-white"
            >
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};