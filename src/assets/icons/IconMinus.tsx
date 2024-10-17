const IconMinus = ({ width = "18px", height = "2px", color = "#ffffff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconMinus;
