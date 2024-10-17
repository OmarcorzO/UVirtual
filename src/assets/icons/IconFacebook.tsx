const IconFacebook = ({
  width = "14px",
  height = "26px",
  color = "var(--colorBlueDark)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.77827 26V14.1595H12.6284L13.2007 9.52352H8.77827V6.57061C8.77827 5.23284 9.13753 4.31692 10.9881 4.31692H13.333V0.183718C12.1921 0.0568626 11.0453 -0.00438894 9.89781 0.00024439C6.49464 0.00024439 4.15809 2.15569 4.15809 6.11265V9.51485H0.333008V14.1508H4.16645V26H8.77827Z"
        fill={color}
      />
    </svg>
  );
};

export default IconFacebook;
