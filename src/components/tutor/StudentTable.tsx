import Link from 'next/link';
import { Progress } from '@/components/student/Progress';
import { Badge } from '@/components/common/Badge';

type StudentsTableProps = {
  students: {
    id: string;
    name: string;
    email: string;
    joined: string;
    courses: number;
    lastActive: string;
    progress: number;
  }[];
};

export const StudentsTable = ({ students }: StudentsTableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700/50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Student
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Courses
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Progress
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Last Active
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {students.map((student) => (
          <tr key={student.id} className="hover:bg-gray-700/30">
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">{student.name.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <div className="font-medium">{student.name}</div>
                  <div className="text-sm text-gray-400">{student.email}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Badge color="purple">{student.courses} course{student.courses !== 1 ? 's' : ''}</Badge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-24 mr-2">
                  <Progress value={student.progress} />
                </div>
                <span className="text-sm text-gray-400">{student.progress}%</span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
              {new Date(student.lastActive).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link 
                href={`/tutor/students/${student.id}`}
                className="text-purple-400 hover:text-purple-300"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};