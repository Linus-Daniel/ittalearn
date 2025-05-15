export const AnimatedBackground = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float3"></div>
      </div>
    );
  };