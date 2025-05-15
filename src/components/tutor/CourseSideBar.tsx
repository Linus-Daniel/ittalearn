import { HiChevronDown, HiDocumentText, HiVideoCamera } from 'react-icons/hi';
import Link from 'next/link';

type CourseSidebarProps = {
  course: {
    id: string;
    sections: {
      id: string;
      title: string;
      lessons: {
        id: string;
        title: string;
        duration: string;
        type: string;
        status: string;
      }[];
    }[];
  };
};

export const CourseSidebar = ({ course }: CourseSidebarProps) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="font-semibold">Course Content</h2>
        <button className="text-purple-400 hover:text-purple-300 text-sm">
          + Add Section
        </button>
      </div>
      
      <div className="divide-y divide-gray-700">
        {course.sections.map((section) => (
          <div key={section.id} className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{section.title}</h3>
              <button className="text-gray-400 hover:text-gray-300">
                <HiChevronDown className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-2 space-y-1">
              {section.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href="#"
                  className={`flex items-center px-3 py-2 rounded text-sm ${
                    lesson.status === 'published'
                      ? 'text-gray-400 hover:bg-gray-700/50'
                      : 'text-gray-500 bg-gray-800/30'
                  }`}
                >
                  {lesson.type === 'video' ? (
                    <HiVideoCamera className="w-4 h-4 mr-3 text-gray-500" />
                  ) : (
                    <HiDocumentText className="w-4 h-4 mr-3 text-gray-500" />
                  )}
                  <span className="truncate">{lesson.title}</span>
                  <span className="ml-auto text-xs text-gray-500">
                    {lesson.duration}
                  </span>
                </Link>
              ))}
            </div>
            
            <button className="mt-2 text-xs text-purple-400 hover:text-purple-300">
              + Add Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};