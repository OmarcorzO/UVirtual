const IconArrowDown = ({
  width = "75px",
  height = "75px",
  colorBackground = "var(--colorOrange)",
  colorIcon = "var(--colorBeige)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="75"
        width="75"
        height="75"
        rx="37.5"
        transform="rotate(90 75 0)"
        fill={colorBackground}
      />
      <path
        d="M37.5 24L37.5 51"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 37.5L37.5 51L24 37.5"
        stroke={colorIcon}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowDown;
