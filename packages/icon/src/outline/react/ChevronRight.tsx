import * as React from 'react';
import type { SVGProps } from 'react';

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 12 12"
    {...props}
  >
    <path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7q-.3.3-.6.3" />
  </svg>
);
export default SvgChevronRight;
