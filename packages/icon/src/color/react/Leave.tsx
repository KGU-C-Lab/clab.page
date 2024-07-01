import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLeave = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#FFCDD2"
      d="M5 38V14h38v24c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4"
    />
    <path fill="#F44336" d="M43 10v6H5v-6c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4" />
    <g fill="#B71C1C">
      <circle cx={33} cy={10} r={3} />
      <circle cx={15} cy={10} r={3} />
    </g>
    <path
      fill="#BDBDBD"
      d="M33 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2M15 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2"
    />
    <path
      fill="#F44336"
      d="M22.2 35.3c0-.2 0-.5.1-.7s.2-.4.4-.5.3-.3.5-.3c.2-.1.5-.1.7-.1s.5 0 .7.1l.6.3c.2.1.3.3.4.5s.1.4.1.7c0 .2 0 .5-.1.7s-.2.4-.4.5-.3.3-.6.3-.3.2-.6.2-.5 0-.7-.1-.4-.2-.5-.3c-.2-.1-.3-.3-.4-.5-.1-.3-.2-.5-.2-.8m3.1-4.3h-2.6l-.4-11h3.3z"
    />
  </svg>
);
export default SvgLeave;
