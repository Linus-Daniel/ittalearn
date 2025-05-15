import { TutorLayout } from '@/components/tutor/Layout';
import { Button } from '@/components/common/Button';
import { HiPlus, HiArrowRight } from 'react-icons/hi';
import { CourseTable } from '@/components/tutor/CourseTable';

const courses = [
  {
    id: '1',
    instructor: 'John Doe',
    title: 'Advanced React Patterns',
    status: 'Published',
    description: 'Master modern and advanced patterns in React for building robust applications.',
    price: 30,
    thumbnail: '/thumbnails/react-patterns.png',
    students: 64,
    rating: 4.8,
    lastUpdated: '2023-05-15',
    revenue: 1920,
    sections: [
      {
        id: 'sec1',
        title: 'Introduction',
        lessons: [
          { id: 'l1', title: 'Course Overview', duration: '5:00', completed: true },
          { id: 'l2', title: 'Why Advanced Patterns?', duration: '7:30', completed: true }
        ]
      },
      {
        id: 'sec2',
        title: 'Render Props and HOCs',
        lessons: [
          { id: 'l3', title: 'Understanding Render Props', duration: '12:00', completed: false },
          { id: 'l4', title: 'Higher Order Components', duration: '15:00', completed: false }
        ]
      }
    ],
    progress: 50
  },
  {
    id: '2',
    instructor: 'Jane Smith',
    title: 'TypeScript Masterclass',
    status: 'Published',
    description: 'Comprehensive guide to using TypeScript in modern web development.',
    price: 30,
    thumbnail: '/thumbnails/ts-masterclass.png',
    students: 42,
    rating: 4.7,
    lastUpdated: '2023-05-10',
    revenue: 1260,
    sections: [
      {
        id: 'sec1',
        title: 'Getting Started',
        lessons: [
          { id: 'l1', title: 'Why TypeScript?', duration: '6:00', completed: true },
          { id: 'l2', title: 'Basic Types', duration: '10:00', completed: true }
        ]
      },
      {
        id: 'sec2',
        title: 'Advanced Types',
        lessons: [
          { id: 'l3', title: 'Generics in TypeScript', duration: '18:00', completed: false },
          { id: 'l4', title: 'Utility Types', duration: '12:00', completed: false }
        ]
      }
    ],
    progress: 60
  },
  {
    id: '3',
    instructor: 'Alex Johnson',
    title: 'Node.js Fundamentals',
    status: 'Draft',
    description: 'Learn the fundamentals of Node.js and backend development.',
    price: 25,
    thumbnail: '/thumbnails/node-fundamentals.png',
    students: 0,
    rating: 50,
    lastUpdated: '2023-05-18',
    revenue: 0,
    sections: [
      {
        id: 'sec1',
        title: 'Basics of Node',
        lessons: [
          { id: 'l1', title: 'Intro to Node.js', duration: '8:00' },
          { id: 'l2', title: 'Node.js Architecture', duration: '10:00' }
        ]
      }
    ],
    progress: 0
  },
  {
    id: '4',
    instructor: 'Emily Davis',
    title: 'GraphQL API Design',
    status: 'Archived',
    description: 'Design and build efficient APIs using GraphQL.',
    price: 20,
    thumbnail: '/thumbnails/graphql-design.png',
    students: 22,
    rating: 4.5,
    lastUpdated: '2023-03-22',
    revenue: 660,
    sections: [
      {
        id: 'sec1',
        title: 'Intro to GraphQL',
        lessons: [
          { id: 'l1', title: 'What is GraphQL?', duration: '9:00', completed: true },
          { id: 'l2', title: 'Setting Up a GraphQL Server', duration: '15:00', completed: true }
        ]
      },
      {
        id: 'sec2',
        title: 'Queries and Mutations',
        lessons: [
          { id: 'l3', title: 'Writing Queries', duration: '14:00', completed: false },
          { id: 'l4', title: 'Mutations Explained', duration: '13:00', completed: false }
        ]
      }
    ],
    progress: 40
  }
];


export default function TutorCoursesPage() {
  return (
    <TutorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">My Courses</h2>
          <Button>
            <HiPlus className="w-5 h-5 mr-2" />
            Create Course
          </Button>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <CourseTable courses={courses} />
        </div>

        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Showing 1 to {courses.length} of {courses.length} courses</span>
          <button className="flex items-center text-purple-400 hover:text-purple-300">
            View All <HiArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </TutorLayout>
  );
}