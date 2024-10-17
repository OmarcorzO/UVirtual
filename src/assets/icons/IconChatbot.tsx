const IconChatbot = ({
  width = "75px",
  height = "75px",
  colorBackground = "var(--colorOrange)",
  colorIcon = "var(--colorBeige)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="37.5" cy="37.5" r="37.5" fill={colorBackground} />
      <path
        d="M37.5 17.5C48.546 17.5 57.5 26.454 57.5 37.5C57.5 48.546 48.546 57.5 37.5 57.5H17.5L23.358 51.642C21.4982 49.7868 20.0232 47.5824 19.0179 45.1555C18.0126 42.7286 17.4968 40.1269 17.5 37.5C17.5 26.454 26.454 17.5 37.5 17.5ZM45.5 39.5H29.5C29.5 41.6217 30.3429 43.6566 31.8432 45.1569C33.3435 46.6571 35.3783 47.5 37.5 47.5C39.6217 47.5 41.6566 46.6571 43.1569 45.1569C44.6572 43.6566 45.5 41.6217 45.5 39.5Z"
        fill={colorIcon}
      />
    </svg>
  );
};

export default IconChatbot;
