import Link from 'next/link';

type RecentStudentCardProps = {
  student: {
    id: string;
    name: string;
    email: string;
    joined: string;
    courses: number;
    lastActive: string;
  };
};

export const RecentStudentCard = ({ student }: RecentStudentCardProps) => {
  return (
    <div className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{student.name}</h3>
          <p className="text-sm text-gray-400">{student.email}</p>
        </div>
        <span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded">
          {student.courses} course{student.courses !== 1 ? 's' : ''}
        </span>
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
        <span>Joined {student.joined}</span>
        <span>Active {student.lastActive}</span>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-700/50">
        <Link 
          href={`/tutor/students/${student.id}`}
          className="text-sm text-purple-400 hover:text-purple-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};