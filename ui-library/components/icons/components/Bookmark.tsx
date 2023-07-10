import * as React from "react";
const SvgBookmark = (props) => (
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
      d="M14 2c2 0 3 1.01 3 3.03v7.05c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2h4Z"
    />
    <path
      stroke="#0C0507"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.82 4.99C3.41 5.56 2 7.66 2 11.9v3.03C2 19.98 4 22 9 22h6c5 0 7-2.02 7-7.07V11.9c0-4.31-1.46-6.42-5-6.94"
    />
  </svg>
);
export default SvgBookmark;
