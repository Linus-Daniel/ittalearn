"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiMenu, 
  HiX, 
  HiHome, 
  HiBookOpen, 
  HiVideoCamera, 
  HiChatAlt2, 
  HiQuestionMarkCircle,
  HiStar,
  HiUsers,
  HiClock,
  HiCheckCircle,
  HiPlay,
  HiArrowRight,
  HiChevronDown,
  HiChevronRight
} from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const CourseLayout = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'module-1': true,
    'module-2': false,
    'module-3': false,
  });

  // Mock course data
  const course = {
    title: "Advanced React Patterns",
    instructor: "Sarah Johnson",
    progress: 35,
    modules: [
      {
        id: 'module-1',
        title: "Getting Started with React",
        lessons: [
          { id: '1-1', title: "Introduction to React", duration: "12:45", completed: true },
          { id: '1-2', title: "Setting Up Your Environment", duration: "18:30", completed: true },
          { id: '1-3', title: "JSX Fundamentals", duration: "22:15", completed: false },
        ]
      },
      {
        id: 'module-2',
        title: "React Hooks Deep Dive",
        lessons: [
          { id: '2-1', title: "useState and useEffect", duration: "25:10", completed: false },
          { id: '2-2', title: "useContext and useReducer", duration: "30:45", completed: false },
        ]
      },
      {
        id: 'module-3',
        title: "Advanced Patterns",
        lessons: [
          { id: '3-1', title: "Compound Components", duration: "28:20", completed: false },
          { id: '3-2', title: "Render Props", duration: "19:15", completed: false },
          { id: '3-3', title: "Higher Order Components", duration: "32:40", completed: false },
        ]
      }
    ],
    stats: {
      rating: 4.8,
      students: 12500,
      duration: "6 weeks"
    },
    currentLesson: {
      id: '1-3',
      title: "JSX Fundamentals",
      videoUrl: "https://example.com/video.mp4"
    }
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <HiMenu className="h-6 w-6" />
          </button>
          
          {/* Course title - centered on mobile */}
          <h1 className="text-lg font-semibold truncate max-w-xs md:max-w-md mx-2 lg:mx-0">
            {course.title}
          </h1>
          
          {/* Desktop progress indicator */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-teal-400" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-300">{course.progress}% complete</span>
          </div>
          
          {/* User controls - placeholder */}
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
              <HiQuestionMarkCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile progress bar */}
        <div className="lg:hidden px-4 pb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">Progress</span>
            <span className="text-xs font-medium text-gray-300">{course.progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-teal-400" 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                onClick={() => setMobileSidebarOpen(false)}
              />
              
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', ease: 'easeInOut' }}
                className="fixed inset-y-0 left-0 z-50 w-72 bg-gray-800 border-r border-gray-700 overflow-y-auto lg:hidden"
              >
                <div className="p-4 flex items-center justify-between border-b border-gray-700">
                  <h2 className="text-xl font-semibold">Course Content</h2>
                  <button 
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    <HiX className="h-6 w-6" />
                  </button>
                </div>
                
                <nav className="p-4">
                  <CourseSidebarContent 
                    modules={course.modules} 
                    expandedModules={expandedModules}
                    toggleModule={toggleModule}
                    currentLessonId={course.currentLesson.id}
                  />
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Static sidebar for desktop */}
        <aside className="hidden lg:block lg:w-80 xl:w-96 flex-shrink-0 border-r border-gray-700 bg-gray-800 overflow-y-auto">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-400">By {course.instructor}</p>
            
            <div className="mt-4 flex items-center space-x-6">
              <div className="flex items-center text-yellow-400">
                <HiStar className="w-5 h-5 mr-1" />
                <span>{course.stats.rating}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <HiUsers className="w-5 h-5 mr-1" />
                <span>{course.stats.students.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <HiClock className="w-5 h-5 mr-1" />
                <span>{course.stats.duration}</span>
              </div>
            </div>
          </div>
          
          <nav className="p-4">
            <CourseSidebarContent 
              modules={course.modules} 
              expandedModules={expandedModules}
              toggleModule={toggleModule}
              currentLessonId={course.currentLesson.id}
            />
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto focus:outline-none">
          <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            {/* Course tabs */}
            <div className="border-b border-gray-700 mb-6">
              <nav className="-mb-px flex space-x-8">
                {['content', 'resources', 'discussions', 'notes'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-purple-500 text-purple-400'
                        : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Current lesson */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{course.currentLesson.title}</h2>
              
              {/* Video player */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-lg mb-6">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-900/50 to-teal-900/50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                    <HiPlay className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Lesson navigation */}
              <div className="flex justify-between">
                <Button variant="secondary">
                  Previous Lesson
                </Button>
                <Button className="flex items-center group">
                  Next Lesson
                  <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Tab content */}
            {activeTab === 'content' && (
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4">About This Lesson</h3>
                <p className="text-gray-300 mb-4">
                  In this lesson, we'll dive deep into JSX fundamentals and how they power React applications. 
                  You'll learn how to write clean, efficient JSX code and understand how it translates to regular JavaScript.
                </p>
                <h3 className="text-xl font-semibold mb-4 mt-8">Key Concepts</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Understanding JSX syntax and its advantages</li>
                  <li>Embedding expressions in JSX</li>
                  <li>JSX vs HTML differences</li>
                  <li>Best practices for writing maintainable JSX</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'resources' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Lesson Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Cheat Sheet.pdf', 'Example Code.zip', 'Further Reading.md', 'Slide Deck.pptx'].map((resource) => (
                    <div key={resource} className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                          <HiBookOpen className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="font-medium">{resource}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'discussions' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Lesson Discussions</h3>
                <p className="text-gray-400">Coming soon...</p>
              </div>
            )}
            
            {activeTab === 'notes' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Notes</h3>
                <textarea
                  className="w-full h-64 bg-gray-800 border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Write your notes here..."
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <Button>Save Notes</Button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

// Reusable sidebar content component
const CourseSidebarContent = ({ modules, expandedModules, toggleModule, currentLessonId }: {
  modules: any[],
  expandedModules: Record<string, boolean>,
  toggleModule: (id: string) => void,
  currentLessonId: string
}) => {
  return (
    <div className="space-y-2">
      {modules.map((module) => (
        <div key={module.id} className="border-b border-gray-700 last:border-b-0 pb-2">
          <button
            onClick={() => toggleModule(module.id)}
            className="w-full flex items-center justify-between py-3 px-2 rounded-md hover:bg-gray-700/50 transition-colors"
          >
            <span className="font-medium text-left">{module.title}</span>
            {expandedModules[module.id] ? (
              <HiChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <HiChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          <AnimatePresence>
            {expandedModules[module.id] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="ml-6 space-y-1 py-1">
                  {module.lessons.map((lesson: any) => (
                    <a
                      key={lesson.id}
                      href={`#lesson-${lesson.id}`}
                      className={`flex items-center py-2 px-3 rounded-md text-sm ${
                        lesson.id === currentLessonId
                          ? 'bg-purple-900/30 text-purple-400 border-l-2 border-purple-500'
                          : 'text-gray-400 hover:bg-gray-700/30 hover:text-gray-200'
                      } ${
                        lesson.completed ? 'opacity-80' : ''
                      }`}
                    >
                      <div className="flex-shrink-0 w-5 h-5 mr-3 flex items-center justify-center">
                        {lesson.completed ? (
                          <HiCheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <HiPlay className="w-3 h-3 text-gray-500" />
                        )}
                      </div>
                      <span className="truncate">{lesson.title}</span>
                      <span className="ml-auto text-xs text-gray-500">{lesson.duration}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CourseLayout;