import Link from 'next/link';
import Image from 'next/image';
import { Progress } from './Progress';


type CourseCardProps = {
  course: {
    id: string;
    title: string;
    instructor: string;
    thumbnail: string;
    category: string;
    progress?: number;
    lastAccessed?: string;
    duration?: string;
    students?: string;
    completedDate?:any
  };
  variant: 'enrolled' | 'recommended' |'completed';
};

export const CourseCard = ({ course, variant }: CourseCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all">
      <div className="relative aspect-video">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium text-purple-400 bg-purple-900/30 px-2 py-1 rounded">
            {course.category}
          </span>
          {variant === 'recommended' && (
            <span className="text-xs text-gray-500">{course.duration}</span>
          )}
        </div>
        
        <h3 className="font-semibold mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-400 mb-4">By {course.instructor}</p>
        
        {variant === 'enrolled' && course.progress && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress: {course.progress}%</span>
              <span>Last accessed: {course.lastAccessed}</span>
            </div>
            <Progress value={course.progress} />
          </div>
        )}

// Add to the existing CourseCard component
{variant === 'completed' && (
  <div className="mt-4 pt-3 border-t border-gray-700/50">
    <div className="flex justify-between text-xs text-gray-500">
      <span>Completed</span>
      <span>{course.completedDate}</span>
    </div>
  </div>
)}
        
        {variant === 'recommended' && (
          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <span>{course.students} students</span>
            <span>⭐ 4.8</span>
          </div>
        )}
        
        <Link
          href={`/student/courses/${course.id}`}
          className={`block w-full text-center py-2 px-4 rounded-lg ${
            variant === 'enrolled'
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'border border-gray-600 hover:bg-gray-700'
          } transition-colors`}
        >
          {variant === 'enrolled' ? 'Continue' : 'Enroll Now'}
        </Link>
      </div>
    </div>
  );
};