import { HiArrowUp, HiArrowDown, HiMinus } from 'react-icons/hi';

type StatCardProps = {
  icon: React.ComponentType<any>;
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
};

export const StatCard = ({ icon: Icon, value, label, trend = 'neutral' }: StatCardProps) => {
  const trendColors = {
    up: 'text-green-400 bg-green-900/20',
    down: 'text-red-400 bg-red-900/20',
    neutral: 'text-yellow-400 bg-yellow-900/20'
  };

  const trendIcons = {
    up: <HiArrowUp className="w-4 h-4" />,
    down: <HiArrowDown className="w-4 h-4" />,
    neutral: <HiMinus className="w-4 h-4" />
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="bg-purple-500/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        {trend !== 'neutral' && (
          <span className={`text-xs px-2 py-1 rounded-full ${trendColors[trend]} flex items-center`}>
            {trendIcons[trend]}
            <span className="ml-1">12%</span>
          </span>
        )}
      </div>
      <p className="text-2xl font-bold mt-4">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
};