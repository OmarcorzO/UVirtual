const IconShare = ({
  width = "75px",
  height = "75px",
  colorBackground = "#FFA600",
  colorIcon = "#ffffff",
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
        d="M40 29L32 35"
        stroke={colorIcon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 40L40 46"
        stroke={colorIcon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 43C29.7614 43 32 40.7614 32 38C32 35.2386 29.7614 33 27 33C24.2386 33 22 35.2386 22 38C22 40.7614 24.2386 43 27 43Z"
        stroke={colorIcon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 54C47.7614 54 50 51.7614 50 49C50 46.2386 47.7614 44 45 44C42.2386 44 40 46.2386 40 49C40 51.7614 42.2386 54 45 54Z"
        stroke={colorIcon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 31C47.7614 31 50 28.7614 50 26C50 23.2386 47.7614 21 45 21C42.2386 21 40 23.2386 40 26C40 28.7614 42.2386 31 45 31Z"
        stroke={colorIcon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconShare;
