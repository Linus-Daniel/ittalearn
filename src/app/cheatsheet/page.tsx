"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiArrowRight, HiSearch } from "react-icons/hi";




const CategoryFilter = ({ categories, activeCategory, setActiveCategory }: {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => (
  <div className="flex flex-wrap justify-center gap-2 mb-8">
    {categories.map((category) => (
      <motion.button
        key={category}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveCategory(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === category
            ? 'bg-gradient-to-r from-purple-500 to-teal-400 text-white'
            : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
        }`}
      >
        {category}
      </motion.button>
    ))}
  </div>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300"
    >
      {title}
    </motion.h2>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);


// Cheat Sheets Components
const CheatSheetsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'JavaScript', 'React', 'CSS', 'Python', 'Git'];
  
  const cheatSheets = [
    {
      id: 1,
      title: "React Hooks Cheat Sheet",
      description: "All the essential React Hooks with examples and common patterns.",
      category: "React",
      downloads: "12.5k",
      updated: "May 2023",
      file: "/cheatsheets/react-hooks.pdf",
      image: "/cheatsheets/react-hooks-thumb.jpg"
    },
    {
      id: 2,
      title: "JavaScript Array Methods",
      description: "Complete reference for all JavaScript array methods with examples.",
      category: "JavaScript",
      downloads: "8.2k",
      updated: "April 2023",
      file: "/cheatsheets/js-array-methods.pdf",
      image: "/cheatsheets/js-array-thumb.jpg"
    },
    {
      id: 3,
      title: "CSS Flexbox & Grid",
      description: "Visual guide to mastering modern CSS layout techniques.",
      category: "CSS",
      downloads: "15.7k",
      updated: "March 2023",
      file: "/cheatsheets/css-layouts.pdf",
      image: "/cheatsheets/css-layout-thumb.jpg"
    },
    {
      id: 4,
      title: "Python Data Structures",
      description: "Quick reference for Python lists, dictionaries, sets and more.",
      category: "Python",
      downloads: "6.3k",
      updated: "February 2023",
      file: "/cheatsheets/python-data-structures.pdf",
      image: "/cheatsheets/python-thumb.jpg"
    },
    {
      id: 5,
      title: "Git Command Reference",
      description: "All the Git commands you'll ever need in one place.",
      category: "Git",
      downloads: "22.1k",
      updated: "January 2023",
      file: "/cheatsheets/git-commands.pdf",
      image: "/cheatsheets/git-thumb.jpg"
    },
  ];

  const filteredCheatSheets = cheatSheets.filter(sheet => {
    const matchesCategory = activeCategory === 'All' || sheet.category === activeCategory;
    const matchesSearch = sheet.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         sheet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Developer Cheat Sheets" 
          subtitle="Quick reference guides for busy developers. Download and save for offline use." 
        />
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search cheat sheets..."
              className="block w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>
        
        {/* Cheat Sheets Grid */}
        {filteredCheatSheets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCheatSheets.map((sheet, index) => (
              <motion.div
                key={sheet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-purple-500/20 transition-all"
              >
                <div className="aspect-[4/3] bg-gray-700 relative">
                  <Image 
                    src={sheet.image}
                    alt={sheet.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <span className="text-xs font-medium px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full">
                      {sheet.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{sheet.title}</h3>
                  <p className="text-gray-400 mb-4">{sheet.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{sheet.updated}</span>
                    <span>{sheet.downloads} downloads</span>
                  </div>
                  <a 
                    href={sheet.file} 
                    download
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Download PDF <HiArrowRight className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No cheat sheets found matching your criteria</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 text-purple-400 hover:text-purple-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheatSheetsPage;