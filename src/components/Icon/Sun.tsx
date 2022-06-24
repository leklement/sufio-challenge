/* Outer props
-------------------------------------------------------------------------*/

import React from "react";

interface IOuterProps {}

/* Template
    -------------------------------------------------------------------------*/

export const Sun: React.FC<IOuterProps> = () => {
  // Render

  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="5" fill="#fff" />
      <path
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M9.75.75v1.833M9.75 17.417v1.833M17.071 3.99l-1.296 1.296M5.286 15.775 3.99 17.071M19.25 10.75h-1.833M2.583 10.75H.75M16.01 17.071l-1.296-1.296M4.225 5.286 2.929 3.99"
      />
    </svg>
  );
};
