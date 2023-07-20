const ActionButton = ({ onClick, size, customClass, children }) => {
  const sizes = {
    small: "small-button",
    medium: "medium-button",
    large: "large-button",
  };

  return (
    <button
      onClick={onClick}
      className={
        `${sizes[size] ?? "small-button"} ${customClass} ` +
        "bg-primary-light border border-primary-light text-white hover:text-primary-light hover:bg-white  active:bg-gradient-to-t active:from-[#f8c99f5b] active:to-white"
      }
    >
      {children}
    </button>
  );
};

export default ActionButton;
