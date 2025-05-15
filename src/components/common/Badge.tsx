type BadgeProps = {
    children: React.ReactNode;
    color: 'green' | 'yellow' | 'red' | 'blue' | 'gray' | 'purple';
  };
  
  const colorClasses = {
    green: 'bg-green-900/20 text-green-400',
    yellow: 'bg-yellow-900/20 text-yellow-400',
    red: 'bg-red-900/20 text-red-400',
    blue: 'bg-blue-900/20 text-blue-400',
    gray: 'bg-gray-700/50 text-gray-400',
    purple: 'bg-purple-900/20 text-purple-400'
  };
  
  export const Badge = ({ children, color }: BadgeProps) => {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
        {children}
      </span>
    );
  };