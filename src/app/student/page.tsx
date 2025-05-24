import { DashboardLayout } from '@/components/student/DashBoardLayout';
import { CourseCard } from '@/components/student/CourseCard';
import { Button } from '@/components/common/Button';
import { HiPlus } from 'react-icons/hi';

const enrolledCourses = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    instructor: 'Sarah Johnson',
    progress: 65,
    thumbnail: '/courses/react.jpg',
    lastAccessed: '2 days ago',
    category: 'Web Development',
    completedDate:""
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Michael Chen',
    progress: 30,
    thumbnail: '/courses/ml.jpg',
    lastAccessed: '1 week ago',
    category: 'Data Science',
    completedDate:""
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    instructor: 'Emma Rodriguez',
    progress: 15,
    thumbnail: '/courses/design.jpg',
    lastAccessed: '3 days ago',
    category: 'Design',
    completedDate:""
  }
];

const recommendedCourses = [
  {
    id: '4',
    title: 'Python for Data Analysis',
    instructor: 'Alex Wong',
    thumbnail: '/courses/python.jpg',
    category: 'Programming',
    completedDate:"",
    duration: '20 hours',
    students: '5.2k'
  },
  {
    id: '5',
    title: 'Mobile App Development with Flutter',
    instructor: 'Priya Patel',
    thumbnail: '/courses/flutter.jpg',
    category: 'Mobile',
    completedDate:"",
    duration: '28 hours',
    students: '4.1k'
  }
];

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <Button variant="secondary" >
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard 
                key={course.id}
                course={course}
                variant="enrolled"
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recommended For You</h2>
            <Button variant="secondary" >
              Browse All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedCourses.map((course) => (
              <CourseCard 
                key={course.id}
                course={course}
                variant="recommended"
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Continue Learning</h2>
              <p className="text-gray-400">Pick up where you left off</p>
            </div>
            <Button >
              <a href='/courses' className=' flex items-center '>

              <HiPlus className="w-4 h-4 mr-2" />
              Find New Courses
              </a>
            </Button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}