const IconArrowLeft = ({
  width = "32px",
  height = "32px",
  color = "var(--colorGrey)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="iconArrowLeft"
    >
      <g clipPath="url(#clip0_1152_4449)">
        <path
          d="M27 16H5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7L5 16L14 25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1152_4449">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrowLeft;
