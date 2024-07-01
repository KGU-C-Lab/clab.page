import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMultipleDevices = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#546E7A"
      d="M4 28V8c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4"
    />
    <path
      fill="#BBDEFB"
      d="M36 7H8c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1"
    />
    <path fill="#37474F" d="M38 33H6c-2.2 0-4-1.8-4-4h40c0 2.2-1.8 4-4 4" />
    <path
      fill="#E38939"
      d="M24 40V16c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4"
    />
    <path
      fill="#FFF3E0"
      d="M40 15H28c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V16c0-.6-.4-1-1-1"
    />
    <circle cx={34} cy={41.5} r={1.5} fill="#A6642A" />
  </svg>
);
export default SvgMultipleDevices;
