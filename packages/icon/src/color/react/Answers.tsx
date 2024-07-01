import * as React from 'react';
import type { SVGProps } from 'react';

const SvgAnswers = (props: SVGProps<SVGSVGElement>) => (
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
    <path fill="#42A5F5" d="M36 44H8V8h20l8 8z" />
    <path fill="#90CAF9" d="M40 40H12V4h20l8 8z" />
    <path fill="#E1F5FE" d="M38.5 13H31V5.5z" />
    <path
      fill="#1976D2"
      d="M23.4 29.9c0-.2 0-.4.1-.6s.2-.3.3-.5.3-.2.5-.3.4-.1.6-.1.5 0 .7.1.4.2.5.3.2.3.3.5.1.4.1.6 0 .4-.1.6-.2.3-.3.5-.3.2-.5.3-.4.1-.7.1-.5 0-.6-.1-.4-.2-.5-.3-.2-.3-.3-.5-.1-.4-.1-.6m2.7-3.1h-2.3l-.4-9.8h3z"
    />
  </svg>
);
export default SvgAnswers;
