import * as React from 'react';
import type { SVGProps } from 'react';

const SvgComboChart = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#00BCD4"
      d="M37 18h6v24h-6zm-8 8h6v16h-6zm-8-4h6v20h-6zm-8 10h6v10h-6zm-8-4h6v14H5z"
    />
    <g fill="#3F51B5">
      <circle cx={8} cy={16} r={3} />
      <circle cx={16} cy={18} r={3} />
      <circle cx={24} cy={11} r={3} />
      <circle cx={32} cy={13} r={3} />
      <circle cx={40} cy={9} r={3} />
      <path d="m39.1 7.2-7.3 3.7-8.3-2.1-8 7-7-1.7-1 3.8 9 2.3 8-7 7.7 1.9 8.7-4.3z" />
    </g>
  </svg>
);
export default SvgComboChart;
