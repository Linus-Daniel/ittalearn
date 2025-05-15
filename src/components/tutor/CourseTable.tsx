import Link from 'next/link';
import { Badge } from '../common/Badge';
import { HiStar } from 'react-icons/hi'
import { CourseSidebarProps } from '../student/courseSideBar';
import { StaticImageData } from 'next/image';

type Props = {
  courses:{
    id:string;
        instructor?:string;
        title: string;
        status?:string;
        description:string;
        price?:number
        thumbnail?:string | StaticImageData;
        students?:number;
        rating?:number ;
        lastUpdated?:string;
        revenue:number
        sections: {
          id: string;
          title: string;
          lessons: {
            id: string;
            title: string;
            status?:string
            duration: string;
            completed?: boolean;
            type?: string;
          }[];
        }[];
        progress: number;
  }[]
};

export const CourseTable = ({ courses }:Props) => {
  const statusColors = {
    Published: 'green',
    Draft: 'yellow',
    Archived: 'gray'
  };

  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700/50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Title
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Students
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Rating
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Revenue
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Last Updated
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {courses.map((course) => (
          <tr key={course.id} className="hover:bg-gray-700/30">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="font-medium">{course.title}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <Badge color={(statusColors[course.status as keyof typeof statusColors] ?? 'gray') as 'green' | 'yellow' | 'gray' | 'red' | 'blue' | 'purple'}>
            {course.status ?? 'Unknown'}
</Badge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {course.students}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {course.rating ? (
                <div className="flex items-center">
                  <HiStar className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                </div>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              ${course.revenue}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {course.lastUpdated}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link 
                href={`/tutor/courses/${course.id}`}
                className="text-purple-400 hover:text-purple-300 mr-4"
              >
                Edit
              </Link>
              <button className="text-gray-400 hover:text-gray-300">
                More
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};