import { HiVideoCamera, HiDocument, HiFolder } from 'react-icons/hi';

type ContentTableProps = {
  content: {
    id: string;
    title: string;
    type: string;
    duration: string;
    size: string;
    lastUpdated: string;
    course: string;
  }[];
};

export const ContentTable = ({ content }: ContentTableProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <HiVideoCamera className="w-5 h-5 text-blue-400" />;
      case 'document':
        return <HiDocument className="w-5 h-5 text-purple-400" />;
      case 'zip':
        return <HiFolder className="w-5 h-5 text-yellow-400" />;
      default:
        return <HiDocument className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700/50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Content
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Course
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Duration
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Size
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Last Updated
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {content.map((item) => (
          <tr key={item.id} className="hover:bg-gray-700/30">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {getIcon(item.type)}
                </div>
                <div className="ml-4">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-400 capitalize">{item.type}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {item.course}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {item.duration}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {item.size}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-400">
              {new Date(item.lastUpdated).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-purple-400 hover:text-purple-300 mr-4">
                Edit
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};