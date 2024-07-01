import * as React from 'react';
import type { SVGProps } from 'react';

const SvgViewDetails = (props: SVGProps<SVGSVGElement>) => (
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
    <path fill="#BBDEFB" d="M7 4h34v40H7z" />
    <path
      fill="#2196F3"
      d="M13 26h4v4h-4zm0-8h4v4h-4zm0 16h4v4h-4zm0-24h4v4h-4zm8 16h14v4H21zm0-8h14v4H21zm0 16h14v4H21zm0-24h14v4H21z"
    />
  </svg>
);
export default SvgViewDetails;
