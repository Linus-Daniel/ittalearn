import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Button } from '../common/Button';

export const ExploreCourses = () => {
  const categories = [
    { name: 'Data Science', count: 425 },
    { name: 'Social Sciences', count: 401 },
    { name: 'Language Learning', count: 150 },
    { name: 'Business', count: 1095 },
    { name: 'Personal Development', count: 137 },
    { name: 'Information Technology', count: 145 },
    { name: 'Computer Science', count: 668 },
    { name: 'Arts and Humanities', count: 338 },
    { name: 'Math and Logic', count: 70 },
    { name: 'Health', count: null },
    { name: 'Physical Science and Engineering', count: 413 },
  ];

  const filters = [
    'Beginner',
    'Popular',
    'Software Engineering & IT',
    'Business',
    'Sales & Marketing',
    'Data Science & Analytics',
    'Healthcare',
  ];

  return (
    <section className="relative z-10 px-6 py-16 md:py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">
            Explore
          </span>{' '}
          our courses
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter, index) => (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button className="px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-800/50 hover:border-purple-400/30 transition-colors">
                {filter}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              {category.count && (
                <p className="text-gray-400">{category.count} courses</p>
              )}
              <div className="mt-4">
                <Button 
                  variant="secondary" 
                  
                  className="flex items-center group"
                >
                  Explore
                  <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

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