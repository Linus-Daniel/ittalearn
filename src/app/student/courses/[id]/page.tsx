"use client"
import { DashboardLayout } from '@/components/student/DashBoardLayout';
import { useParams, useRouter } from 'next/navigation';
import CourseContent from '@/components/student/CourseContent';
import { CourseSidebar } from '@/components/student/courseSideBar';
import { Course } from '@/types';

const courseData = {
  id: '1',
  title: 'Advanced React Patterns',
  instructor: 'Sarah Johnson',
  description: 'Master advanced React concepts including hooks, context API, performance optimization, and testing.',
  progress: 65,
  sections: [
    {
      id: '1',
      title: 'Getting Started',
      lessons: [
        {
          id: '1',
          title: 'Course Introduction',
          duration: '5:20',
          completed: true,
          type: 'video'
        },
        {
          id: '2',
          title: 'Setting Up Your Environment',
          duration: '12:45',
          completed: true,
          type: 'video'
        }
      ]
    },
    {
      id: '2',
      title: 'React Hooks Deep Dive',
      lessons: [
        {
          id: '3',
          title: 'useState and useEffect',
          duration: '18:30',
          completed: true,
          type: 'video'
        },
        {
          id: '4',
          title: 'useContext and useReducer',
          duration: '22:10',
          completed: true,
          type: 'video'
        },
        {
          id: '5',
          title: 'Custom Hooks',
          duration: '15:45',
          completed: false,
          type: 'video'
        }
      ]
    },
    {
      id: '3',
      title: 'Performance Optimization',
      lessons: [
        {
          id: '6',
          title: 'React.memo and useMemo',
          duration: '14:20',
          completed: false,
          type: 'video'
        },
        {
          id: '7',
          title: 'Code Splitting',
          duration: '10:15',
          completed: false,
          type: 'video'
        },
        {
          id: '8',
          title: 'Practice Exercise',
          duration: '30 min',
          completed: false,
          type: 'exercise'
        }
      ]
    }
  ]
};

export default function CoursePage() {
  const router = useRouter();
  const params = useParams()

  const  id = params.id as string

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <CourseContent course={courseData} />
        </div>
        
        <div className="lg:w-80 xl:w-96 flex-shrink-0">
          <CourseSidebar course={courseData} />
        </div>
      </div>
    </DashboardLayout>
  );
}