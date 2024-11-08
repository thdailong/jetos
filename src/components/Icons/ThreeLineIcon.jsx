import * as React from "react";
const ThreeLineIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 6h14M5 12h14M5 18h14"
    />
  </svg>
);
export default ThreeLineIcon;
