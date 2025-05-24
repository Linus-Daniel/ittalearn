"use client"
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiArrowRight, HiChevronRight, HiPlay, HiStar, HiUsers, HiClock, HiCheckCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';
import { courses } from '@/constants';
import { Course } from '@/types';

// Mock data for our course
const course = {
  id: '1',
  title: 'Advanced Machine Learning with Python',
  instructor: 'Dr. Sarah Johnson',
  rating: 4.8,
  students: 12500,
  duration: '6 weeks',
  category: 'data-science',
  description: 'Master the latest machine learning techniques with hands-on projects using Python. This comprehensive course covers everything from fundamental concepts to cutting-edge algorithms used in industry today.',
  price: 99.99,
  discountPrice: 79.99,
  lessons: [
    { title: 'Introduction to Machine Learning', duration: '45 min', completed: true },
    { title: 'Python for Data Science', duration: '1h 20min', completed: true },
    { title: 'Supervised Learning Algorithms', duration: '2h 10min', completed: false },
    { title: 'Neural Networks Fundamentals', duration: '1h 45min', completed: false },
    { title: 'Natural Language Processing', duration: '2h 30min', completed: false },
  ],
  requirements: [
    'Basic Python knowledge',
    'Understanding of algebra',
    'Computer with Python 3.7+ installed'
  ],
  thumbnail: '/course-ml.jpg'
};
 const CourseView = () => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollmentComplete, setEnrollmentComplete] = useState(false);
  const [course, setCourse] = useState<Course>();
  const params = useParams()
  const id = params.id as string;
  const router = useRouter();

  useEffect(()=>{

    courses.find((course) => {
      if (course.id === id) {
        setCourse(course);
        return true;
      }
      return false;
    }
    );

  },[id])

  const handleEnroll = () => {
    // Simulate enrollment process
    setTimeout(() => {
      setEnrollmentComplete(true);
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Back button */}
      <button 
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-20 flex items-center text-gray-300 hover:text-white transition-colors"
      >
        <HiArrowLeft className="w-5 h-5 mr-2" />
        Back to courses
      </button>

      {/* Main course content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left column - Course content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">
                {course?.title}
              </span>
            </h1>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center text-yellow-400">
                <HiStar className="w-5 h-5 mr-1" />
                <span>{course?.rating}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <HiUsers className="w-5 h-5 mr-1" />
                <span>{course?.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center text-gray-300">
                <HiClock className="w-5 h-5 mr-1" />
                <span>{course?.duration}</span>
              </div>
            </div>

            {/* Course video preview */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl mb-8">
              <div className="p-4 bg-gray-800 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-teal-900/50 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                  <HiPlay className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Course description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About this course</h2>
              <p className="text-gray-300 leading-relaxed">{course?.description}</p>
            </div>

            {/* Curriculum */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
              <div className="border border-gray-700 rounded-xl overflow-hidden">
                {course?.lessons.map((lesson, index) => (
                  <div 
                    key={index} 
                    className={`p-4 border-b border-gray-700 last:border-b-0 flex items-center justify-between ${lesson.completed ? 'bg-gray-800/30' : 'bg-gray-800/10'}`}
                  >
                    <div className="flex items-center">
                      {lesson.completed ? (
                        <HiCheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-gray-500 mr-3"></div>
                      )}
                      <span className={lesson.completed ? 'text-gray-300' : 'text-gray-400'}>{lesson.title}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {course?.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Enrollment card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-teal-900/50 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={course?.thumbnail} 
                    alt={course?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold">${course?.discountPrice}</span>
                  <span className="text-gray-400 line-through">${course?.price}</span>
                </div>

                <Button 
                  onClick={() => setShowEnrollModal(true)}
                  className="w-full flex items-center justify-center group mb-4"
                >
                  Enroll Now
                  <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-gray-400 text-sm text-center">30-day money-back guarantee</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <HiPlay className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">{course?.lessons.length} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <HiClock className="w-5 h-5 text-teal-400 mr-3" />
                    <span className="text-gray-300">{course?.duration} duration</span>
                  </div>
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-300">Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {showEnrollModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              if (enrollmentComplete) {
                setShowEnrollModal(false);
                setEnrollmentComplete(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 border border-gray-700 rounded-xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {!enrollmentComplete ? (
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-center">Complete Enrollment</h3>
                  
                  <div className="mb-6 p-4 bg-gray-700/50 rounded-lg flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-900/50 to-teal-900/50 rounded-lg mr-4 overflow-hidden">
                      <img 
                        src={course?.thumbnail} 
                        alt={course?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold line-clamp-1">{course?.title}</h4>
                      <p className="text-sm text-gray-400">By {course?.instructor}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-lg font-bold">${course?.discountPrice}</span>
                        <span className="text-gray-400 text-sm line-through ml-2">${course?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-gray-300 mb-2">Card Number</label>
                      <input 
                        type="text" 
                        placeholder="1234 5678 9012 3456" 
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Expiry Date</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY" 
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">CVC</label>
                        <input 
                          type="text" 
                          placeholder="123" 
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleEnroll}
                    className="w-full flex items-center justify-center group"
                    // isLoading={enrollmentComplete}
                  >
                    Complete Payment
                    <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HiCheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Enrollment Complete!</h3>
                  <p className="text-gray-300 mb-6">You now have full access to "{course?.title}"</p>
                  <Button 
                    onClick={() => {
                      setShowEnrollModal(false);
                      setEnrollmentComplete(false);
                    }}
                    className="flex items-center mx-auto group"
                  >
                    Start Learning
                    <HiChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default CourseView;