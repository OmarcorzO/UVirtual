const IconColombia = ({
  width = "24px",
  height = "16px",
  color1 = "#FFBD05",
  color2 = "#003087",
  color3 = "#B22233",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="8" fill={color1} />
      <rect y="8" width="24" height="4" fill={color2} />
      <rect y="12" width="24" height="4" fill={color3} />
    </svg>
  );
};

export default IconColombia;
