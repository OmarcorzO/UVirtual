const IconArrowRight = ({
  width = "16px",
  height = "12px",
  color = "var(--colorBlueDark)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.60296 0.301387C9.87199 0.0323501 10.3082 0.0323501 10.5772 0.301387L15.3996 5.12378C15.6687 5.39281 15.6687 5.82901 15.3996 6.09805L10.5772 10.9204C10.3082 11.1895 9.87199 11.1895 9.60296 10.9204C9.33392 10.6514 9.33392 10.2152 9.60296 9.94617L13.2493 6.29982H1.13423C0.753749 6.29982 0.445312 5.99139 0.445312 5.61091C0.445312 5.23044 0.753749 4.922 1.13423 4.922H13.2493L9.60296 1.27566C9.33392 1.00662 9.33392 0.570424 9.60296 0.301387Z"
        fill={color}
      />
    </svg>
  );
};

export default IconArrowRight;
