function Item({ children, className, active, ...props }) {
  return (
    <li {...props} className={className}>
      {typeof children == 'function' ? children(active) : children}
    </li>
  );
}

export default Item;
