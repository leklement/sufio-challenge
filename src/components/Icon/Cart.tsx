import React, {SVGAttributes} from "react";

/* Outer props
-------------------------------------------------------------------------*/

interface IOuterProps extends SVGAttributes<SVGElement> {
  className?: string;
}

/* Template
    -------------------------------------------------------------------------*/

export const Cart: React.FC<IOuterProps> = (props) => {
  // Render

  return (
    <svg
      className={props.className}
      width="54"
      height="39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.398 31.91H46.09c.706 0 1.327-.468 1.52-1.147L53.94 8.614a1.582 1.582 0 0 0-1.521-2.016H13.75l-1.131-5.09A1.582 1.582 0 0 0 11.074.27H1.582a1.582 1.582 0 1 0 0 3.164h8.223l5.712 25.704a4.753 4.753 0 0 0-2.86 4.354 4.752 4.752 0 0 0 4.745 4.746H46.09a1.582 1.582 0 1 0 0-3.164H17.402c-.872 0-1.582-.71-1.582-1.582 0-.87.708-1.58 1.578-1.581ZM50.321 9.763l-5.425 18.984H18.671L14.453 9.762H50.32Z"
        fill="#000"
      />
    </svg>
  );
};
