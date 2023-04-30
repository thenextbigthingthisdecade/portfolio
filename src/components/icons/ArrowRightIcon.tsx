type IconProps = {
  className?: string;
};

export const ArrowRightIcon = (props: IconProps) => (
  <svg
    data-testid="geist-icon"
    fill="none"
    height="18"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="18"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);
