import React from "react";

function MessageBoxIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          d="M15.268 5.561l-4.266 3.434a2.223 2.223 0 01-2.746 0L3.954 5.561"
          transform="translate(2 3.5)"
        ></path>
        <path
          d="M4.888 0h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H4.888C1.968 17.116 0 14.741 0 11.822V5.294C0 2.375 1.968 0 4.888 0z"
          transform="translate(2 3.5)"
        ></path>
      </g>
    </svg>
  );
}

export default MessageBoxIcon;
