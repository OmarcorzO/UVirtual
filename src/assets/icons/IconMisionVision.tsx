const IconMisionVision = ({
  width = "60px",
  height = "60px",
  color = "var(--colorBlueDark)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="29" stroke={color} strokeWidth="2" />
      <path
        d="M19.7778 31.8889V20.7778C19.7778 20.0411 20.0704 19.3345 20.5914 18.8136C21.1123 18.2927 21.8188 18 22.5556 18H39.2222C39.9589 18 40.6655 18.2927 41.1864 18.8136C41.7073 19.3345 42 20.0411 42 20.7778V38.8333C42 40.2222 41.1667 43 37.8333 43M37.8333 43H21.1667C19.7778 43 17 42.1667 17 38.8333V36.0556H33.6667V38.8333C33.6667 42.1667 36.4444 43 37.8333 43Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconMisionVision;
