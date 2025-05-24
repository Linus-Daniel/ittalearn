"use client";
import { HiPlay, HiDocumentText, HiChevronDown, HiCheckCircle } from 'react-icons/hi';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CourseContentProps = {
  course: {
    title: string;
    description: string;
    instructor: string;
    sections: {
      id: string;
      title: string;
      lessons: {
        id: string;
        title: string;
        duration: string;
        completed: boolean;
        type: string;
      }[];
    }[];
  };
};

const CourseContent = ({ course }: CourseContentProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
      {/* Current Lesson Video Player (mobile-first) */}
      <div className="relative aspect-video bg-gradient-to-br from-purple-900/30 to-teal-900/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
            onClick={() => {/* Play video logic */}}
          >
            <HiPlay className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white font-medium">
            {currentLesson || "Select a lesson to begin"}
          </p>
        </div>
      </div>
      
      {/* Course Info */}
      <div className="p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-400 text-sm md:text-base mb-4">{course.description}</p>
        
        {/* Mobile-friendly curriculum */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Course Curriculum</h2>
          
          {course.sections.map((section) => (
            <div key={section.id} className="mb-2 border-b border-gray-700 last:border-b-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center py-3 px-2 hover:bg-gray-700/30 rounded-lg transition-colors"
              >
                <span className="text-left font-medium">{section.title}</span>
                <HiChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedSections[section.id] ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {expandedSections[section.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-4 py-2 space-y-2">
                      {section.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLesson(lesson.title)}
                          className={`w-full flex items-center justify-between py-2 px-3 rounded-md text-sm ${
                            currentLesson === lesson.title
                              ? 'bg-purple-900/30 text-purple-400'
                              : 'text-gray-300 hover:bg-gray-700/30'
                          }`}
                        >
                          <div className="flex items-center">
                            {lesson.completed ? (
                              <HiCheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            ) : (
                              <HiPlay className="w-4 h-4 text-gray-500 mr-2" />
                            )}
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-xs text-gray-500">{lesson.duration}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* Resources Section */}
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors">
              <HiDocumentText className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-sm">Custom Hooks Cheat Sheet</span>
            </button>
            <button className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors">
              <HiDocumentText className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-sm">Exercise Files</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;