import React from "react";

const Star = ({ filled, half }: any) => {
  return (
    <svg
      className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-gray-300"} ${
        half ? "text-yellow-500" : ""
      }`}
      fill={filled || half ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {half ? (
        <path d="M12 2v15.27L5.82 21l1.64-7.03L2 9.24l7.19-.61L12 2z" />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.869 5.796a1 1 0 00.95.691h6.136c.969 0 1.371 1.24.588 1.81l-4.974 3.64a1 1 0 00-.364 1.118l1.869 5.796c.3.921-.755 1.688-1.54 1.118l-4.974-3.64a1 1 0 00-1.176 0l-4.974 3.64c-.784.57-1.838-.197-1.54-1.118l1.869-5.796a1 1 0 00-.364-1.118L2.405 11.224c-.784-.57-.38-1.81.588-1.81h6.136a1 1 0 00.95-.691l1.87-5.796z"
        />
      )}
    </svg>
  );
};

export default Star;
