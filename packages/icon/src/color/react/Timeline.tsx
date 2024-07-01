import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTimeline = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#3F51B5"
      d="M42 29H20.8c-.5 0-1-.2-1.4-.6l-3.7-3.7c-.4-.4-.4-1 0-1.4l3.7-3.7c.4-.4.9-.6 1.4-.6H42c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1"
    />
    <path fill="#CFD8DC" d="M9 6h2v36H9z" />
    <g fill="#90A4AE">
      <circle cx={10} cy={10} r={3} />
      <circle cx={10} cy={24} r={3} />
      <circle cx={10} cy={38} r={3} />
    </g>
    <path
      fill="#448AFF"
      d="M34 43H20.8c-.5 0-1-.2-1.4-.6l-3.7-3.7c-.4-.4-.4-1 0-1.4l3.7-3.7c.4-.4.9-.6 1.4-.6H34c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1"
    />
    <path
      fill="#00BCD4"
      d="M35 15H20.8c-.5 0-1-.2-1.4-.6l-3.7-3.7c-.4-.4-.4-1 0-1.4l3.7-3.7c.4-.4.9-.6 1.4-.6H35c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1"
    />
  </svg>
);
export default SvgTimeline;
