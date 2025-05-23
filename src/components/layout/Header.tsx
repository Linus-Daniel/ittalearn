'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap } from "react-icons/hi";
import { Button } from '../common/Button';
import { NavItem } from '@/types';
import Link from 'next/link';

type HeaderProps = {
  navItems: NavItem[];
  onMenuToggle: () => void;
};

export const Header = ({ navItems, onMenuToggle }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-4 md:py-2 flex justify-between items-center transition-colors duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2"
      >
        <HiAcademicCap className="w-8 h-8 text-purple-400" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">
          IttaLearn
        </span>
      </motion.div>

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
            href={item.href}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex items-center space-x-4"
      >
        <Link href="/signin">
          <Button variant="secondary">Log In</Button>
        </Link>
        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </motion.div>

      <button 
        className="md:hidden text-gray-300"
        onClick={onMenuToggle}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};
