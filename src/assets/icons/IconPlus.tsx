const IconPlus = ({
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
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.2004 6.40039H14.8004V14.8004H6.40039V17.2004H14.8004V25.6004H17.2004V17.2004H25.6004V14.8004H17.2004V6.40039Z"
        fill={color}
      />
    </svg>
  );
};

export default IconPlus;
