import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../common/Button';
import { NavItem } from '@/types';

type MobileMenuProps = {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, navItems, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-6 py-4 space-y-4 bg-gray-800/90 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-700">
              <Button variant="secondary" className="w-full">Log In</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};