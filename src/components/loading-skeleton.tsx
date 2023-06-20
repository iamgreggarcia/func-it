// components/loading-skeleton.tsx
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-around mb-4 animate-pulse">
        <div className="h-10 bg-gray-400 rounded w-1/4"></div>
        <div className="h-10 bg-gray-400 rounded w-1/4"></div>
        <div className="h-10 bg-gray-400 rounded w-1/4"></div>
      </div>
      <div className="mx-auto w-full flex flex-col h-screen pb-8 animate-pulse">
        <div className="flex flex-grow overflow-hidden">
          <div className="flex justify-around w-full h-5/6">
            <div className="w-3/5 h-full overflow-auto bg-gray-400"></div>
            <div className="flex flex-col justify-center mx-4">
              <div className="h-10 bg-gray-400 rounded w-24 mb-4"></div>
              <div className="h-10 bg-gray-400 rounded w-24"></div>
            </div>
            <div className="w-3/5 h-full overflow-auto bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;