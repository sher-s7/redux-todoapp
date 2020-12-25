const Link = ({ currentFilter, onClick, children }) => {
  return (
    <button disabled={currentFilter} onClick={onClick}>
      {children}
    </button>
  );
};
export default Link;
