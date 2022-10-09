import { forwardRef, useEffect } from 'react';

const Button = forwardRef(({ children, activeIndex, setActiveIndex, ...props }, ref) => {
  useEffect(() => {
    if (setActiveIndex) {
      setActiveIndex(activeIndex);
    }
  });
  return (
    <button ref={ref} {...props}>
      {typeof children == 'function' ? children(activeIndex) : children}
    </button>
  );
});

export default Button;
