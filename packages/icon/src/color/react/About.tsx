import * as React from 'react';
import type { SVGProps } from 'react';

const SvgAbout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#2196F3"
      d="M37 40H11l-6 6V12c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6"
    />
    <g fill="#fff">
      <path d="M22 20h4v11h-4z" />
      <circle cx={24} cy={15} r={2} />
    </g>
  </svg>
);
export default SvgAbout;
