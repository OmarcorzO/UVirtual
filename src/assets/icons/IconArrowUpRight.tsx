const IconArrowUpRight = ({
  width = "24px",
  height = "24px",
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1161_1622)">
        <path
          d="M6 18L18 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 6H18V15.75"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1161_1622">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrowUpRight;
