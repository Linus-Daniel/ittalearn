import { DashboardLayout } from '@/components/student/DashBoardLayout';
import Image from 'next/image';
import { Progress } from '@/components/student/Progress';
import {  HiBookOpen, HiClock, HiChartBar } from 'react-icons/hi';
import {HiTrophy} from "react-icons/hi2"
import { CourseCard } from '@/components/student/CourseCard';



export default function ProfilePage() {

    const profileData = {
        user: {
          name: 'Linus Daniel',
          email: 'Ld604068@gmail.com',
          bio: 'I am a web developer',
          joinDate: 'December 2023',
          avatar: '/avatars/linus.png',
          stats: {
            coursesCompleted: 3,
            totalHours: 27,
            currentStreak: 5,
            achievements: 5
          }
        },
        activeCourses: [
          {
            id: '101',
            title: 'Mastering Next.js',
            instructor: 'David Kim',
            progress: 45,
            thumbnail: '/images/nextjs.webp',
            category: 'Web Development'
          },
          {
            id: '102',
            title: 'UI/UX Design Principles',
            instructor: 'Jane Doe',
            progress: 20,
            thumbnail: '/images/uiux.png',
            category: 'Design'
          }
        ],
        completedCourses: [
          {
            id: '103',
            title: 'HTML & CSS Basics',
            instructor: 'John Smith',
            progress: 100,
            thumbnail: '/images/htmlcss.png',
            category: 'Frontend',
            completedDate: 'April 10, 2024'
          },
          {
            id: '104',
            title: 'Git & GitHub Essentials',
            instructor: 'Amy Wong',
            progress: 100,
            thumbnail: '/images/git.avif',
            category: 'DevOps',
            completedDate: 'March 28, 2024'
          },
          {
            id: '105',
            title: 'Responsive Web Design',
            instructor: 'Ali Khan',
            progress: 100,
            thumbnail: '/images/webdesign.jpg',
            category: 'Frontend',
            completedDate: 'February 20, 2024'
          }
        ],
        recentAchievements: [
          {
            id: '201',
            title: 'Streak Keeper',
            description: 'Logged in 5 days in a row',
            icon: HiTrophy,
            date: 'May 12, 2024',
            rarity: 'uncommon'
          },
          {
            id: '202',
            title: 'Design Explorer',
            description: 'Started your first design course',
            icon: HiTrophy,
            date: 'May 11, 2024',
            rarity: 'common'
          }
        ],
        activity: [
          { date: 'Today', action: 'Completed lesson: Next.js Routing', course: 'Mastering Next.js' },
          { date: 'Yesterday', action: 'Started course: UI/UX Design Principles', course: '' },
          { date: '2 days ago', action: 'Earned achievement: Streak Keeper', course: '' },
          { date: '3 days ago', action: 'Completed quiz: Git Basics', course: 'Git & GitHub Essentials' }
        ]
      };
      
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Profile Header */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500/50">
              <Image
                src={profileData.user.avatar}
                alt={profileData.user.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{profileData.user.name}</h1>
              <p className="text-gray-400 mt-1">{profileData.user.email}</p>
              <p className="mt-3 text-gray-300">{profileData.user.bio}</p>
              <p className="mt-3 text-sm text-gray-500">
                Member since {profileData.user.joinDate}
              </p>
            </div>
            
            <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            icon={HiBookOpen}
            value={profileData.user.stats.coursesCompleted}
            label="Courses Completed"
          />
          <StatCard 
            icon={HiClock}
            value={profileData.user.stats.totalHours}
            label="Hours Learned"
          />
          <StatCard 
            icon={HiChartBar}
            value={profileData.user.stats.currentStreak}
            label="Day Streak"
          />
          <StatCard 
            icon={HiTrophy}
            value={profileData.user.stats.achievements}
            label="Achievements"
          />
        </div>

        {/* Active Courses */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Active Courses</h2>
          {profileData.activeCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.activeCourses.map((course) => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  variant="enrolled"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">You're not enrolled in any courses yet.</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                Browse Courses
              </button>
            </div>
          )}
        </div>

        {/* Completed Courses */}
        {profileData.completedCourses.length > 0 && (
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Completed Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.completedCourses.map((course) => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  variant="completed"
                />
              ))}
            </div>
          </div>
        )}

        {/* Recent Achievements */}
        {profileData.recentAchievements.length > 0 && (
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.recentAchievements.map((achievement) => (
                <AchievementCard 
                  key={achievement.id}
                  achievement={achievement}
                />
              ))}
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {profileData.activity.map((activity, index) => (
              <ActivityItem 
                key={index}
                date={activity.date}
                action={activity.action}
                course={activity.course}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const StatCard = ({ icon: Icon, value, label }: { icon: React.ComponentType<any>, value: number, label: string }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
      <div className="flex items-center">
        <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );
};

const AchievementCard = ({ achievement }: { achievement: any }) => {
  const Icon = achievement.icon;
  const rarityColors = {
    common: 'bg-gray-500',
    uncommon: 'bg-green-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-yellow-500'
  };
  const color = rarityColors[achievement.rarity as keyof typeof rarityColors] || 'bg-gray-500';

  return (
    <div className="border border-gray-700 rounded-xl p-5 hover:bg-gray-800/30 transition-colors">
      <div className="flex items-start">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mr-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold">{achievement.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{achievement.description}</p>
          <p className="text-xs text-gray-500 mt-2">Earned: {achievement.date}</p>
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ date, action, course }: { date: string, action: string, course: string }) => {
  return (
    <div className="flex items-start pb-4 last:pb-0 border-b border-gray-700 last:border-0">
      <div className="bg-gray-700/50 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>
      <div>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="font-medium">{action}</p>
        {course && (
          <p className="text-sm text-gray-500">Course: {course}</p>
        )}
      </div>
    </div>
  );
};