import { HiPlay, HiDocumentText } from 'react-icons/hi';

type CourseContentProps = {
  course: {
    title: string;
    description: string;
    instructor: string;
    sections: {
      id: string;
      title: string;
      lessons: {
        id: string;
        title: string;
        duration: string;
        completed: boolean;
        type: string;
      }[];
    }[];
  };
};

const CourseContent = ({ course }: CourseContentProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
      {/* <div className="aspect-video bg-gray-700 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiPlay className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-400">Now Playing: Custom Hooks</p>
        </div>
      </div> */}
      
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-400 mb-6">{course.description}</p>
        
        <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">Custom Hooks</h3>
          <p className="text-gray-400 text-sm mb-4">
            Learn how to create reusable custom hooks to share logic across components.
          </p>
          <div className="aspect-video bg-black rounded">
            {/* Video player would be here */}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Resources</h3>
          <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
            <HiDocumentText className="w-5 h-5 text-gray-400 mr-3" />
            <span>Custom Hooks Cheat Sheet</span>
          </div>
          <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
            <HiDocumentText className="w-5 h-5 text-gray-400 mr-3" />
            <span>Exercise Files</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CourseContent