"use client";
import { HiAcademicCap } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press"]
    },
    {
      title: "Resources",
      links: ["Help Center", "Tutorials", "Webinars", "Community"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy", "Licenses"]
    }
  ];

  const pathname = usePathname()

  const showFooter = pathname != "/"

  

  return (
    <footer className={`relative  ${showFooter && "hidden"} z-10 px-6 py-12 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <HiAcademicCap className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">NexusLearn</span>
          </div>
          <p className="text-gray-400 mb-6">
            The future of education is here. Learn anywhere, anytime.
          </p>
          <div className="flex space-x-4">
            {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className={`fab fa-${social} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((column, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} NexusLearn. All rights reserved.</p>
      </div>
    </footer>
  );
};