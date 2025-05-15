import { DashboardLayout } from "@/components/student/DashBoardLayout";
import { ProgressChart } from '@/components/student/ProgressChart';

const progressData = {
  overall: 65,
  courses: [
    {
      id: '1',
      title: 'Advanced React Patterns',
      progress: 65,
      lastActivity: '2 days ago',
      completionDate: null
    },
    {
      id: '2',
      title: 'Machine Learning Fundamentals',
      progress: 30,
      lastActivity: '1 week ago',
      completionDate: null
    },
    {
      id: '3',
      title: 'UI/UX Design Masterclass',
      progress: 15,
      lastActivity: '3 days ago',
      completionDate: null
    },
    {
      id: '4',
      title: 'JavaScript Basics',
      progress: 100,
      lastActivity: '3 weeks ago',
      completionDate: 'May 15, 2023'
    }
  ],
  weeklyActivity: [5, 8, 6, 10, 4, 7, 9], // Hours per day
  skills: [
    { name: 'React', level: 75 },
    { name: 'JavaScript', level: 85 },
    { name: 'UI Design', level: 40 },
    { name: 'Python', level: 30 }
  ]
};

export default function ProgressPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Overall Progress</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <ProgressChart value={progressData.overall} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{progressData.overall}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
            {/* Weekly activity chart would go here */}
            <div className="h-40 flex items-end justify-between">
              {progressData.weeklyActivity.map((hours, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-6 bg-purple-500 rounded-t-sm"
                    style={{ height: `${hours * 8}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-500 text-xs">🏆</span>
                </div>
                <span className="text-sm">Completed JavaScript Basics</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-500 text-xs">🔥</span>
                </div>
                <span className="text-sm">5-day streak</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">My Courses Progress</h3>
          <div className="space-y-4">
            {progressData.courses.map((course) => (
              <div key={course.id} className="flex items-center">
                <div className="flex-1 mr-4">
                  <h4 className="font-medium">{course.title}</h4>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-400">
                  {course.completionDate || `Last activity: ${course.lastActivity}`}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Skill Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {progressData.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}