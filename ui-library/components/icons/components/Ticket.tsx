import * as React from "react";
const SvgTicket = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#0C0507"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5Z"
    />
    <path
      stroke="#0C0507"
      strokeDasharray="5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 4v16"
    />
  </svg>
);
export default SvgTicket;
