import React from "react";

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
  return (
    <div className="flex items-center justify-center py-10">
      <button
        className={`px-6 py-2 text-indigo-600 font-semibold bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
          className || ""
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Tag;
