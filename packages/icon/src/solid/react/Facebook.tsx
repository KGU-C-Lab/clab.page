import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256" />
  </svg>
);
export default SvgFacebook;
