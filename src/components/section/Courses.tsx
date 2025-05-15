import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { HiPlay, HiPhotograph } from 'react-icons/hi';
import { Course } from '@/types';
import { courses } from '@/constants/index';

type CoursesSectionProps = {
  courses: Course[];
};

export const Courses = () => {
  return (
    <section id="courses" className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <SectionTitle 
        title="Popular Courses" 
        subtitle="Join thousands of students learning with our top-rated courses" 
      />

      <div className="grid md:grid-cols-3 gap-8">
        {courses.slice(0,6).map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg hover:shadow-purple-500/10 transition-all overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-teal-900/50 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <HiPlay className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  {course.isTopRated && (
                    <div className="flex items-center bg-purple-900/30 px-2 py-1 rounded text-sm">
                      <HiPhotograph className="w-4 h-4 mr-1 text-yellow-400" />
                      <span>Top Rated</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4">{course.category}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{course.duration}</span>
                  <span>{course.students} students</span>
                  <span className="flex items-center">
                    ⭐ {course.rating}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Button>
          Browse All Courses
        </Button>
      </motion.div>
    </section>
  );
};