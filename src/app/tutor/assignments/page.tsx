import { TutorLayout } from '@/components/tutor/Layout';
import { AssignmentsTable } from '@/components/tutor/AssignmentTable';
import { Button } from '@/components/common/Button';
import { HiPlus } from 'react-icons/hi';

const assignments = [
  {
    id: '1',
    title: 'React Hooks Practice',
    course: 'Advanced React Patterns',
    dueDate: '2023-06-15',
    submissions: 42,
    averageGrade: 85
  },
  {
    id: '2',
    title: 'TypeScript Quiz',
    course: 'TypeScript Masterclass',
    dueDate: '2023-06-10',
    submissions: 38,
    averageGrade: 78
  },
  {
    id: '3',
    title: 'Node.js Project',
    course: 'Node.js Fundamentals',
    dueDate: '2023-06-20',
    submissions: 18,
    averageGrade: 92
  }
];

export default function TutorAssignmentsPage() {
  return (
    <TutorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Assignments</h2>
          <Button>
            <HiPlus className="w-5 h-5 mr-2" />
            Create Assignment
          </Button>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <AssignmentsTable assignments={assignments} />
        </div>
      </div>
    </TutorLayout>
  );
}