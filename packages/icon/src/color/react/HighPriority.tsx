import * as React from 'react';
import type { SVGProps } from 'react';

const SvgHighPriority = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#F44336"
      d="m21.2 44.8-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0"
    />
    <path
      fill="#fff"
      d="M21.6 32.7c0-.3.1-.6.2-.9s.3-.5.5-.7.5-.4.8-.5.6-.2 1-.2.7.1 1 .2.6.3.8.5.4.4.5.7.2.6.2.9-.1.6-.2.9-.3.5-.5.7-.5.4-.8.5-.6.2-1 .2-.7-.1-1-.2-.5-.3-.8-.5c-.2-.2-.4-.4-.5-.7s-.2-.5-.2-.9m4.2-4.6h-3.6L21.7 13h4.6z"
    />
  </svg>
);
export default SvgHighPriority;
