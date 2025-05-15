import { HiAcademicCap, HiUserGroup, HiStar, HiCheckCircle } from 'react-icons/hi';

type AnalyticsStatsProps = {
  stats: {
    totalStudents: number;
    newStudents: number;
    completionRate: number;
    avgRating: number;
  };
};

export const AnalyticsStats = ({ stats }: AnalyticsStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center">
          <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
            <HiUserGroup className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.totalStudents}</p>
            <p className="text-sm text-gray-400">Total Students</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center">
          <div className="bg-green-500/10 p-3 rounded-lg mr-4">
            <HiAcademicCap className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.newStudents}</p>
            <p className="text-sm text-gray-400">New This Month</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center">
          <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
            <HiCheckCircle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.completionRate}%</p>
            <p className="text-sm text-gray-400">Completion Rate</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center">
          <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
            <HiStar className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.avgRating}</p>
            <p className="text-sm text-gray-400">Avg Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};