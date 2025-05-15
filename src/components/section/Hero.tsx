import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

export const Hero = () => {
  return (
    <section className="relative z-10 px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">
              Learn
            </span>{' '}
            the skills of tomorrow
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Master in-demand skills with our immersive courses taught by industry leaders. 
            Start your journey today with our AI-powered learning platform.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button>
              Start Learning <HiArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary">
              <HiPlay className="w-5 h-5 mr-2" /> Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-gray-800 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-teal-900/50 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <HiPlay className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Interactive Learning Experience</h3>
              <p className="text-gray-400">See how our platform transforms education</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};