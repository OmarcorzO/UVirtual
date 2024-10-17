const IconFavorite = ({ width = "36ox", height = "30px", color = "#fff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.574219 10.198C0.574219 18.6726 7.57977 23.1879 12.7067 27.2309C14.5156 28.6564 16.2583 30 18.001 30C19.7436 30 21.4863 28.6581 23.2952 27.2291C28.4239 23.1896 35.4277 18.6726 35.4277 10.1997C35.4277 1.72512 25.843 -4.28536 18.001 3.86338C10.1589 -4.2871 0.574219 1.72338 0.574219 10.198Z"
        fill={color}
      />
    </svg>
  );
};

export default IconFavorite;
