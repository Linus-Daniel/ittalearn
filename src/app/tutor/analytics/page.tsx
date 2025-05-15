import { TutorLayout } from '@/components/tutor/Layout';
import { AnalyticsChart } from '@/components/tutor/AnalyticCharts';
import { AnalyticsStats } from '@/components/tutor/AnalyticsStats';
// import { AnalyticsTable } from '@/components/tutor/AnalyticsTable';

const analyticsData = {
  overview: {
    totalStudents: 128,
    newStudents: 24,
    completionRate: 68,
    avgRating: 4.7
  },
  chartData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    students: [45, 60, 75, 82, 105, 128],
    revenue: [900, 1200, 1500, 1800, 2100, 2560]
  },
  topCourses: [
    {
      id: '1',
      title: 'Advanced React Patterns',
      students: 64,
      revenue: 1920,
      rating: 4.8
    },
    {
      id: '2',
      title: 'TypeScript Masterclass',
      students: 42,
      revenue: 1260,
      rating: 4.7
    },
    {
      id: '3',
      title: 'Node.js Fundamentals',
      students: 22,
      revenue: 660,
      rating: 4.5
    }
  ]
};

export default function TutorAnalyticsPage() {
  return (
    <TutorLayout>
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Course Analytics</h2>
        
        <AnalyticsStats stats={analyticsData.overview} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold mb-6">Student Growth</h3>
            <AnalyticsChart 
              data={analyticsData.chartData.students} 
              labels={analyticsData.chartData.labels}
              color="#8b5cf6"
            />
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold mb-6">Revenue</h3>
            <AnalyticsChart 
              data={analyticsData.chartData.revenue} 
              labels={analyticsData.chartData.labels}
              color="#10b981"
            />
          </div>
        </div>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h3 className="font-semibold mb-6">Top Performing Courses</h3>
          {/* <AnalyticsTable courses={analyticsData.topCourses} /> */}
        </div>
      </div>
    </TutorLayout>
  );
}