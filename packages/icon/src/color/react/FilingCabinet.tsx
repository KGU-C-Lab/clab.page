import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFilingCabinet = (props: SVGProps<SVGSVGElement>) => (
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
    <path fill="#263238" d="M12 44h4v2h-4zm20 0h4v2h-4z" />
    <path
      fill="#607D8B"
      d="M8 41V7c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4"
    />
    <path
      fill="#B0BEC5"
      d="M12 17V8c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v9zm0 2h24v10H12zm0 21v-9h24v9c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1"
    />
    <path fill="#546E7A" d="M20 11h8v2h-8zm0 12h8v2h-8zm0 12h8v2h-8z" />
  </svg>
);
export default SvgFilingCabinet;
