function Box({ isShow, children, className }) {
  return (
    isShow && (
      <ul
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={className}
      >
        {children}
      </ul>
    )
  );
}

export default Box;
