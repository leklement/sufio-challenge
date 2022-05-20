/* Outer props
-------------------------------------------------------------------------*/

import React from "react";

interface IOuterProps {
  className?: string;
}

/* Template
    -------------------------------------------------------------------------*/

export const Star: React.FC<IOuterProps> = (props) => {
  const {className} = props;

  // Render

  return (
    <svg
      width="10"
      height="10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="m5 1.302.86 2.07.118.282.305.024 2.234.18-1.702 1.458-.232.198.07.297.52 2.18-1.912-1.168L5 6.664l-.26.16-1.914 1.168.52-2.18.071-.298-.232-.198-1.702-1.459 2.234-.179.305-.024.117-.282L5 1.302Z" />
    </svg>
  );
};
