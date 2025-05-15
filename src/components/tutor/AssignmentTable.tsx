import Link from 'next/link';
import { Badge } from '@/components/common/Badge';

type AssignmentsTableProps = {
  assignments: {
    id: string;
    title: string;
    course: string;
    dueDate: string;
    submissions: number;
    averageGrade: number;
  }[];
};

export const AssignmentsTable = ({ assignments }: AssignmentsTableProps) => {
  const getStatusColor = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    return due > today ? 'green' : 'red';
  };

  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700/50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Assignment
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Course
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Due Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Submissions
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Avg Grade
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {assignments.map((assignment) => (
          <tr key={assignment.id} className="hover:bg-gray-700/30">
            <td className="px-6 py-4 whitespace-nowrap font-medium">
              {assignment.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {assignment.course}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <Badge color={getStatusColor(assignment.dueDate)}>
                  {new Date(assignment.dueDate).toLocaleDateString()}
                </Badge>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {assignment.submissions}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${assignment.averageGrade}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 ml-2">{assignment.averageGrade}%</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link 
                href={`/tutor/assignments/${assignment.id}`}
                className="text-purple-400 hover:text-purple-300"
              >
                Grade
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};