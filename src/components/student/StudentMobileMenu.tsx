import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../common/Button';
import { NavItem } from '@/types';
import { HiBookOpen, HiClock, HiStar, HiUserCircle, HiCog, HiX, HiOutlineLogout } from 'react-icons/hi';
import Link from 'next/link';
import { useEffect } from 'react';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  {
    label: 'My Courses',
    href: '/student',
    icon: HiBookOpen,
  },
  {
    label: 'Progress',
    href: '/student/progress',
    icon: HiClock,
  },
  {
    label: 'Achievements',
    href: '/student/achievements',
    icon: HiStar,
  },
  {
    label: 'Profile',
    href: '/student/profile',
    icon: HiUserCircle,
  },
  {
    label: 'Settings',
    href: '/student/settings',
    icon: HiCog,
  },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Close menu when clicking outside or on Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            key="mobile-menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="mobile-menu-container fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 shadow-xl md:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header with close button */}
              <div className="flex items-center justify-between border-b border-gray-700 p-4">
                <h2 className="text-lg font-semibold text-white">Menu</h2>
                <button
                  onClick={onClose}
                  className="rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Close menu"
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation items */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-4 rounded-md px-4 py-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                        onClick={onClose}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="border-t border-gray-700 p-4">
                <Button
                  variant="primary"
                  className="w-full  flex iitems-center justify-start gap-3 text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={onClose}
                >
                  <HiOutlineLogout className="h-5 w-5" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};