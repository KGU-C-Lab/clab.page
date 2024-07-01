import * as React from 'react';
import type { SVGProps } from 'react';

const SvgOvertime = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#CFD8DC"
      d="M12 40V20h32v20c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4"
    />
    <path
      fill="#78909C"
      d="M44 16v6H12v-6c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4"
    />
    <g fill="#37474F">
      <circle cx={37} cy={16} r={3} />
      <circle cx={20} cy={16} r={3} />
    </g>
    <path
      fill="#B0BEC5"
      d="M37 10c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2m-17 0c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2"
    />
    <path
      fill="#90A4AE"
      d="M32 34h4v4h-4zm-6 0h4v4h-4zm-6 0h4v4h-4zm12-6h4v4h-4zm-6 0h4v4h-4zm-6 0h4v4h-4z"
    />
    <circle cx={16} cy={15} r={12} fill="#F44336" />
    <circle cx={16} cy={15} r={9} fill="#eee" />
    <path d="M15 8h2v7h-2z" />
    <path d="m20.518 18.1-1.343 1.344-3.818-3.818 1.344-1.343z" />
    <circle cx={16} cy={15} r={1.5} />
  </svg>
);
export default SvgOvertime;
