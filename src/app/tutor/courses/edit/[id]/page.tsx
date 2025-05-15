"use client"
import { TutorLayout } from '@/components/tutor/Layout';
import { useParams, useRouter } from 'next/navigation';
import { CourseEditor } from '@/components/tutor/CourseEditor';
import { CourseSidebar, CourseSidebarProps } from '@/components/student/courseSideBar';

const courseData:CourseSidebarProps['course'] = {
    id: '1',
    title: 'Advanced React Patterns',
    description: 'Master advanced React concepts including hooks, context API, performance optimization, and testing.',
    status: 'Published',
    price: 49,
    thumbnail: '/courses/react.jpg',
    sections: [
      {
        id: '1',
        title: 'Getting Started',
        lessons: [
          {
            id: '1',
            title: 'Course Introduction',
            duration: '5:20',
            type: 'video', // ✅ exact string
            status: 'published',
            completed: true, // ✅ added
          },
          {
            id: '2',
            title: 'Setting Up Your Environment',
            duration: '12:45',
            type: 'video',
            status: 'published',
            completed: true,
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
            type: 'video',
            status: 'published',
            completed: false
          },
          {
            id: '4',
            title: 'useContext and useReducer',
            duration: '22:10',
            type: 'video',
            status: 'published',
            completed: false
          },
          {
            id: '5',
            title: 'Custom Hooks',
            duration: '15:45',
            type: 'video',
            status: 'draft',
            completed: true
          }
        ]
      }
    ],
    progress: 50,
    students: 64,
    rating: 4.8,
    lastUpdated: '2023-05-15',
  };
  

export default function TutorCoursePage() {
  const params = useParams()
  const id  = params.id as string;

  return (
    <TutorLayout>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <CourseEditor course={courseData} />
        </div>
        
        <div className="lg:w-80 xl:w-96 flex-shrink-0">
          <CourseSidebar course={courseData} />
        </div>
      </div>
    </TutorLayout>
  );
}