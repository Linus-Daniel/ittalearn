import { TutorLayout } from '@/components/tutor/Layout';
import { StatCard } from '@/components/tutor/StatsCard';
import { RecentCourseCard } from '@/components/tutor/RecentCourseCard';
import { RecentStudentCard } from '@/components/tutor/RecentStudentCard';
import { 
  HiAcademicCap,
  HiUsers,
  HiCurrencyDollar,
  HiStar,
  HiClock
} from 'react-icons/hi';

const stats = {
  totalCourses: 4,
  totalStudents: 128,
  totalRevenue: 3840,
  averageRating: 4.7,
  totalHours: 42
};

const recentCourses = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    students: 64,
    lastUpdated: '2 days ago',
    thumbnail: '/courses/react.jpg'
  },
  {
    id: '2',
    title: 'TypeScript Masterclass',
    students: 42,
    lastUpdated: '1 week ago',
    thumbnail: '/courses/typescript.jpg'
  }
];

const recentStudents = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    joined: 'May 15, 2023',
    courses: 2,
    lastActive: '2 hours ago'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    joined: 'May 10, 2023',
    courses: 1,
    lastActive: '1 day ago'
  }
];

export default function TutorDashboard() {
  return (
    <TutorLayout>
      <div className="space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard 
            icon={HiAcademicCap}
            value={stats.totalCourses}
            label="Courses"
            trend="up"
          />
          <StatCard 
            icon={HiUsers}
            value={stats.totalStudents}
            label="Students"
            trend="up"
          />
          <StatCard 
            icon={HiCurrencyDollar}
            value={`$${stats.totalRevenue}`}
            label="Revenue"
            trend="up"
          />
          <StatCard 
            icon={HiStar}
            value={stats.averageRating}
            label="Avg Rating"
            trend="neutral"
          />
          <StatCard 
            icon={HiClock}
            value={`${stats.totalHours}h`}
            label="Content"
            trend="up"
          />
        </div>

        {/* Recent Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Courses</h2>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <RecentCourseCard 
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          </div>

          {/* Recent Students */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Students</h2>
            <div className="space-y-4">
              {recentStudents.map((student) => (
                <RecentStudentCard 
                  key={student.id}
                  student={student}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-900/30 border border-purple-700/30 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
            <h3 className="font-semibold mb-3">Create New Course</h3>
            <p className="text-sm text-gray-400 mb-4">Start building your next course</p>
            <button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-gradient-to-br from-teal-900/50 to-teal-900/30 border border-teal-700/30 rounded-xl p-6 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
            <h3 className="font-semibold mb-3">Analyze Performance</h3>
            <p className="text-sm text-gray-400 mb-4">View detailed course analytics</p>
            <button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              View Analytics
            </button>
          </div>
          <div className="bg-gradient-to-br from-pink-900/50 to-pink-900/30 border border-pink-700/30 rounded-xl p-6 hover:shadow-lg hover:shadow-pink-500/10 transition-all">
            <h3 className="font-semibold mb-3">Engage Students</h3>
            <p className="text-sm text-gray-400 mb-4">Send announcements or messages</p>
            <button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Contact Students
            </button>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}