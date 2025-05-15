import { Badge } from '@/components/common/Badge';
import { HiDocumentDownload } from 'react-icons/hi';

type CertificatesTableProps = {
  certificates: {
    id: string;
    student: string;
    course: string;
    issuedDate: string;
    completionDate: string;
    status: string;
  }[];
};

export const CertificatesTable = ({ certificates }: CertificatesTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Issued':
        return 'green';
      case 'Pending':
        return 'yellow';
      default:
        return 'gray';
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700/50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Student
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Course
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Completion Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Issued Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {certificates.map((certificate) => (
          <tr key={certificate.id} className="hover:bg-gray-700/30">
            <td className="px-6 py-4 whitespace-nowrap font-medium">
              {certificate.student}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {certificate.course}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {new Date(certificate.completionDate).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {new Date(certificate.issuedDate).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Badge color={getStatusColor(certificate.status)}>
                {certificate.status}
              </Badge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-purple-400 hover:text-purple-300 flex items-center">
                <HiDocumentDownload className="w-4 h-4 mr-1" />
                Download
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};