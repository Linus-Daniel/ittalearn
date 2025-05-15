import Image from 'next/image';
import Link from 'next/link';

type RecentCourseCardProps = {
  course: {
    id: string;
    title: string;
    students: number;
    lastUpdated: string;
    thumbnail: string;
  };
};

export const RecentCourseCard = ({ course }: RecentCourseCardProps) => {
  return (
    <div className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="ml-4 flex-1 min-w-0">
        <h3 className="font-medium truncate">{course.title}</h3>
        <div className="flex items-center mt-1 text-sm text-gray-400">
          <span>{course.students} students</span>
          <span className="mx-2">•</span>
          <span>Updated {course.lastUpdated}</span>
        </div>
      </div>
      <Link 
        href={`/tutor/courses/${course.id}`}
        className="ml-4 px-3 py-1 bg-gray-700 rounded-lg text-sm hover:bg-gray-600 transition-colors"
      >
        Manage
      </Link>
    </div>
  );
};