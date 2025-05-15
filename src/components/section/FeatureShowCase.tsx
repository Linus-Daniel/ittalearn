"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../common/Button';
import { HiSparkles, HiUserGroup, HiPlay } from 'react-icons/hi';
import { Feature } from '@/types';

export const FeatureShowcase = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features: Feature[] = [
    {
      title: "AI-Powered Learning",
      description: "Our adaptive algorithms tailor courses to your learning style and pace, ensuring maximum knowledge retention.",
      icon: <HiSparkles className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry leaders and top professionals who are passionate about sharing their knowledge.",
      icon: <HiUserGroup className="w-12 h-12 text-teal-400" />
    },
    {
      title: "Interactive Content",
      description: "Engaging videos, quizzes, and hands-on projects that make learning enjoyable and effective.",
      icon: <HiPlay className="w-12 h-12 text-pink-400" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{features[currentFeature].title}</h3>
                <p className="text-gray-400 mb-8 text-lg">{features[currentFeature].description}</p>
                <Button>
                  Learn More
                </Button>
              </motion.div>
            </AnimatePresence>
            <div className="flex mt-8 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentFeature === index ? 'bg-purple-500' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-teal-900/50 flex items-center justify-center p-12">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg"
            >
              {features[currentFeature].icon}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};