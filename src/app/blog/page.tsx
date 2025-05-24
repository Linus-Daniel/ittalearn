"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiSearch, HiBookOpen, HiCalendar, HiUser, HiTag, HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';

// Shared components
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

// Blog Components
const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Tutorials', 'Industry News', 'Learning Tips', 'Case Studies'];
  
  const blogPosts = [
    {
      id: 1,
      title: "Mastering React Hooks in 2023",
      excerpt: "Learn how to leverage the latest React Hooks features to build more efficient components.",
      category: "Tutorials",
      date: "May 15, 2023",
      author: "Sarah Johnson",
      readTime: "8 min read",
      image: "/blog/react-hooks.jpg"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies that will shape how we build web applications.",
      category: "Industry News",
      date: "April 28, 2023",
      author: "Michael Chen",
      readTime: "6 min read",
      image: "/blog/web-dev-future.jpg"
    },
    {
      id: 3,
      title: "Optimizing Your Learning Process",
      excerpt: "Science-backed techniques to accelerate your coding skills acquisition.",
      category: "Learning Tips",
      date: "April 10, 2023",
      author: "Emily Davis",
      readTime: "10 min read",
      image: "/blog/learning-process.jpg"
    },
    {
      id: 4,
      title: "Building Scalable Microservices",
      excerpt: "How we redesigned our architecture to handle 10x more traffic.",
      category: "Case Studies",
      date: "March 22, 2023",
      author: "David Kim",
      readTime: "12 min read",
      image: "/blog/microservices.jpg"
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Blog & Insights" 
          subtitle="Discover the latest tutorials, industry news, and learning strategies from our experts" 
        />
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
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
        
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-purple-500/20 transition-all"
              >
                <div className="aspect-video bg-gray-700 relative">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No articles found matching your criteria</p>
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



// Combined Layout
const BlogAndCheatSheets = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <BlogPage />
    </div>
  );
};

export default BlogAndCheatSheets;