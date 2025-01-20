import React from "react";

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <button
        className={`lg:px-6 px-4 py-1 text-indigo-600 font-semibold bg-gray-100 border-b-2 border-gray-300 rounded-md shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
          className || ""
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Tag;
