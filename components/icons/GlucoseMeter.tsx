import { SVGProps } from 'react';

export default function GlucoseMeter({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      {/* Meter body */}
      <rect x="4" y="2" width="16" height="20" rx="2.5" />
      {/* Display screen */}
      <rect x="6.5" y="4.5" width="11" height="6" rx="1" />
      {/* Reading on screen */}
      <text
        x="12"
        y="9"
        textAnchor="middle"
        fontSize="3.5"
        fontFamily="sans-serif"
        stroke="none"
        fill="currentColor"
      >
        mg/dL
      </text>
      {/* Test strip slot */}
      <rect x="8.5" y="13.5" width="7" height="2" rx="0.5" />
      {/* Blood drop on strip */}
      <path d="M11.5 13 Q12 11.5 12.5 13 A0.8 0.8 0 0 1 11.5 13" fill="currentColor" stroke="none" />
      {/* Button */}
      <circle cx="12" cy="18.5" r="1.2" />
    </svg>
  );
}
