import React from 'react';

interface DesertHorizonBackdropProps {
  variant?: 'hero' | 'divider';
  className?: string;
}

/**
 * Subtle architectural mountain ridge and sun-arc vector inspired by the ArizoTek logo.
 * Built with clean inline SVG so it can be replicated cleanly in WordPress blocks/themes.
 */
export const DesertHorizonBackdrop: React.FC<DesertHorizonBackdropProps> = ({
  variant = 'hero',
  className = '',
}) => {
  if (variant === 'divider') {
    return (
      <div
        className={`w-full overflow-hidden pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 md:h-14 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 72L240 46L410 58L690 22L920 50L1160 30L1440 56V72H0Z"
            fill="#FAF8F6"
          />
          <path
            d="M0 72L240 46L410 58L690 22L920 50L1160 30L1440 56"
            stroke="#E8E1DB"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 900 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-55"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Subtle desert sun arc */}
        <path
          d="M230 250C230 156.112 306.112 80 400 80C493.888 80 570 156.112 570 250"
          stroke="#E9A04A"
          strokeOpacity="0.28"
          strokeWidth="2"
        />
        <path
          d="M275 250C275 180.964 330.964 125 400 125C469.036 125 525 180.964 525 250"
          stroke="#D66A25"
          strokeOpacity="0.16"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        {/* Layered geometric mountain ridges */}
        <path
          d="M40 320L245 182L385 268L575 148L860 320H40Z"
          fill="#FAF8F6"
        />
        <path
          d="M40 320L245 182L385 268L575 148L860 320"
          stroke="#E8E1DB"
          strokeWidth="1.25"
        />
        <path
          d="M150 320L340 222L470 286L660 198L890 320H150Z"
          fill="#D66A25"
          fillOpacity="0.04"
        />
      </svg>
    </div>
  );
};
