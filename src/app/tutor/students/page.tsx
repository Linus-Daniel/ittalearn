import { TutorLayout } from '@/components/tutor/Layout';
import { Button } from '@/components/common/Button';
// import { SearchInput } from '@/components/tutor/SearchInput';
import { StudentsTable } from '@/components/tutor/StudentTable';
import { HiPlus, HiFilter } from 'react-icons/hi';

const students = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    joined: '2023-05-15',
    courses: 2,
    lastActive: '2023-06-10',
    progress: 65
  },
  {
    id: '2',
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    joined: '2023-05-10',
    courses: 1,
    lastActive: '2023-06-08',
    progress: 30
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    joined: '2023-05-20',
    courses: 3,
    lastActive: '2023-06-09',
    progress: 42
  }
];

export default function TutorStudentsPage() {
  return (
    <TutorLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Students</h2>
          <div className="flex items-center space-x-3">
            {/* <SearchInput placeholder="Search students..." /> */}
            <Button variant="secondary">
              <HiFilter  />     Filters
            </Button>
            <Button>
              <HiPlus className="w-4 h-4 mr-2" />
              Add Students
            </Button>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <StudentsTable students={students} />
        </div>
      </div>
    </TutorLayout>
  );
}