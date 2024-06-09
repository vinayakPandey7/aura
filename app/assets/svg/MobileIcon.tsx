import React from "react";

function MobileIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3.8 12.2L9 9 8 2H2v3a17 17 0 0017 17h3v-6l-7-1-3.2 5.2M14 6a4 4 0 014 4M14 2a8 8 0 018 8"></path>
    </svg>
  );
}

export default MobileIcon;
