import React from 'react';

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  logo: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ id, name, description, url, category, logo }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
    >
      <div className="p-5 flex-1">
        <div className="w-12 h-12 mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          {/* Placeholder for logo */}
          <span className="text-xl font-bold text-gray-500 dark:text-gray-300">
            {name.charAt(0)}
          </span>
        </div>
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
            {category}
          </span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-100 dark:border-gray-700">
        <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400">
          Try it now
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
      </div>
    </a>
  );
};

export default ToolCard;