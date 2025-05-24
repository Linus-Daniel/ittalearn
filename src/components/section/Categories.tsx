"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiArrowRight, HiChevronRight, HiPlay } from 'react-icons/hi';
import { Button } from '../common/Button';

type Course = {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  category: string;
};

type Category = {
  id: string;
  name: string;
};

export const CourseBrowser = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', name: 'All Courses' },
    { id: 'data-science', name: 'Software Development' },
    { id: 'business', name: 'Business' },
    { id: 'computer-science', name: 'Trade' },
    { id: 'health', name: 'Health' },
    { id: 'personal-development', name: 'Personal Development' },
    { id: 'personal-development', name: 'Data science and Machine Learning' },

  ];

  const courses: Course[] = [
    {
      id: '1',
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      students: 12500,
      duration: '6 weeks',
      category: 'data-science',
    },
    {
      id: '2',
      title: 'Financial Analysis for Beginners',
      instructor: 'Prof. Michael Chen',
      rating: 4.6,
      students: 8700,
      duration: '4 weeks',
      category: 'business',
    },
    {
      id: '3',
      title: 'Full Stack Web Development',
      instructor: 'Alex Rodriguez',
      rating: 4.9,
      students: 21500,
      duration: '8 weeks',
      category: 'computer-science',
    },
    {
      id: '4',
      title: 'Nutrition and Wellness',
      instructor: 'Dr. Emily Wilson',
      rating: 4.7,
      students: 6300,
      duration: '5 weeks',
      category: 'health',
    },
    {
      id: '5',
      title: 'Productivity Masterclass',
      instructor: 'James Peterson',
      rating: 4.5,
      students: 4200,
      duration: '3 weeks',
      category: 'personal-development',
    },
    {
      id: '6',
      title: 'Data Visualization with Python',
      instructor: 'Dr. Lisa Zhang',
      rating: 4.8,
      students: 9800,
      duration: '4 weeks',
      category: 'data-science',
    },
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="relative z-10 px-6 py-16 md:py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">
            Browse
          </span>{' '}
          our courses
        </h2>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-teal-400 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-400/30 transition-colors group"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-teal-900/50 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <HiPlay className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-3">By {course.instructor}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="flex items-center text-yellow-400">
                    ⭐ {course.rating}
                  </span>
                  <span className="text-gray-400">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">{course.duration}</span>
                  <Button
                    variant="secondary"
                    className="flex items-center group"
                  >
                    Enroll
                    <HiChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No courses found in this category</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button className="flex items-center mx-auto group">
            View all courses
            <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};