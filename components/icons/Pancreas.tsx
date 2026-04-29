import { SVGProps } from 'react';

export default function Pancreas({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Meter body — rounded rectangle */}
      <rect x="6" y="3" width="12" height="13" rx="3" />
      {/* Small display screen */}
      <rect x="8.5" y="5.5" width="7" height="4" rx="1" />
      {/* Reading value on screen */}
      <line x1="10" y1="7.5" x2="14" y2="7.5" strokeWidth="1" />
      {/* Test strip slot */}
      <path d="M 10.5 16 L 10.5 21 Q 10.5 21.5 11 21.5 L 13 21.5 Q 13.5 21.5 13.5 21 L 13.5 16" />
      {/* Blood drop on tip of strip */}
      <circle cx="12" cy="21.8" r="0.5" fill="currentColor" stroke="none" />
      {/* Button */}
      <circle cx="12" cy="13" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
