import { TutorLayout } from '@/components/tutor/Layout';
import { ContentTable } from '@/components/tutor/ContentTable';
import { Button } from '@/components/common/Button';
import { HiPlus } from 'react-icons/hi'

const contentItems = [
  {
    id: '1',
    title: 'Introduction to React Hooks',
    type: 'video',
    duration: '15:42',
    size: '45 MB',
    lastUpdated: '2023-05-15',
    course: 'Advanced React Patterns'
  },
  {
    id: '2',
    title: 'Custom Hooks Workshop',
    type: 'video',
    duration: '22:18',
    size: '68 MB',
    lastUpdated: '2023-05-18',
    course: 'Advanced React Patterns'
  },
  {
    id: '3',
    title: 'TypeScript Basics',
    type: 'video',
    duration: '18:30',
    size: '55 MB',
    lastUpdated: '2023-05-10',
    course: 'TypeScript Masterclass'
  },
  {
    id: '4',
    title: 'Exercise Files',
    type: 'zip',
    duration: '-',
    size: '12 MB',
    lastUpdated: '2023-05-05',
    course: 'TypeScript Masterclass'
  }
];

export default function TutorContentPage() {
  return (
    <TutorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">My Content</h2>
          <Button>
            <HiPlus className="w-5 h-5 mr-2" />
            Upload Content
          </Button>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <ContentTable content={contentItems} />
        </div>
      </div>
    </TutorLayout>
  );
}