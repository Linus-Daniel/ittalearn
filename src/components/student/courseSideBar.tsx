import { StaticImageData } from 'next/image';
import { HiChevronDown, HiCheckCircle } from 'react-icons/hi';

export type CourseSidebarProps = {
  course: {
    id:string;
    instructor?:string;
    title: string;
    status?:string;
    description:string;
    price?:number
    thumbnail?:string | StaticImageData;
    students?:number;
    rating?:number;
    lastUpdated?:string;

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
  };
};

export const CourseSidebar = ({ course }: CourseSidebarProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="font-semibold">{course.title}</h2>
        <div className="flex items-center mt-2">
          <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-400">{course.progress}%</span>
        </div>
      </div>
      
      <div className="divide-y divide-gray-700">
        {course.sections.map((section) => (
          <div key={section.id} className="p-4">
            <button className="flex items-center justify-between w-full">
              <h3 className="font-medium">{section.title}</h3>
              <HiChevronDown className="w-5 h-5 text-gray-400" />
            </button>
            
            <div className="mt-2 space-y-1">
              {section.lessons.map((lesson) => (
                <a
                  key={lesson.id}
                  href="#"
                  className={`flex items-center px-3 py-2 rounded text-sm ${
                    lesson.id === '5' // Current lesson
                      ? 'bg-purple-900/30 text-white'
                      : 'text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  <span className="flex-shrink-0 w-4 h-4 mr-3">
                    {lesson.completed ? (
                      <HiCheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <span className="block w-2 h-2 rounded-full bg-gray-600"></span>
                    )}
                  </span>
                  <span className="truncate">{lesson.title}</span>
                  <span className="ml-auto text-xs text-gray-500">
                    {lesson.duration}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};