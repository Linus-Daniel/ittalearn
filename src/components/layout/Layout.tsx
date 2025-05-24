"use client"
import Head from "next/head";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { NavItem } from "@/types";
import { ReactNode, useState } from "react";
import { Footer } from "./Footer";

type Props  = {
    children:ReactNode
}

export default function Layout({children}:Props) {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const navItems: NavItem[] = [
      { label: 'Courses', href: '/courses' },
      { label: 'Cheat Sheets', href: '/cheatsheet' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'About', href: '/about' },
     
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
  
        <Header 
          navItems={navItems} 
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
        />
  
        <MobileMenu 
          isOpen={isMenuOpen} 
          navItems={navItems} 
          onClose={() => setIsMenuOpen(false)} 
        />
        {
            children
        }
        <Footer />

        </div>
        )}
  