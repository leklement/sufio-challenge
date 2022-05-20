/* Outer props
-------------------------------------------------------------------------*/

import React from "react";

interface IOuterProps {
  className?: string;
}

/* Template
    -------------------------------------------------------------------------*/

export const Moon: React.FC<IOuterProps> = (props) => {
  const {className} = props;

  // Render

  return (
    <svg
      width="17"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.186 13.84A9 9 0 0 1 5.815 0a9 9 0 1 0 10.371 13.84Z"
        fill="#000"
      />
    </svg>
  );
};
