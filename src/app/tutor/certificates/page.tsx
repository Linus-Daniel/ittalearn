import { TutorLayout } from '@/components/tutor/Layout';
import { CertificatesTable } from '@/components/tutor/CertificateTable';
import { Button } from '@/components/common/Button';
import { HiPlus } from 'react-icons/hi';

const certificates = [
  {
    id: '1',
    student: 'Alex Johnson',
    course: 'Advanced React Patterns',
    issuedDate: '2023-05-15',
    completionDate: '2023-05-10',
    status: 'Issued'
  },
  {
    id: '2',
    student: 'Sarah Williams',
    course: 'TypeScript Masterclass',
    issuedDate: '2023-05-18',
    completionDate: '2023-05-15',
    status: 'Issued'
  },
  {
    id: '3',
    student: 'Michael Chen',
    course: 'Node.js Fundamentals',
    issuedDate: '2023-05-20',
    completionDate: '2023-05-18',
    status: 'Pending'
  }
];

export default function TutorCertificatesPage() {
  return (
    <TutorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Certificates</h2>
          <Button>
            <HiPlus className="w-5 h-5 mr-2" />
            Issue Certificate
          </Button>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <CertificatesTable certificates={certificates} />
        </div>
      </div>
    </TutorLayout>
  );
}