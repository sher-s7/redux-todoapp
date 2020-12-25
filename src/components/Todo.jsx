const Todo = (props) => {
  return (
    <>
      <li
        style={{
          cursor: "pointer",
          textDecoration: props.completed ? "line-through" : "none",
        }}
        onClick={props.onClick}
      >
        {props.text}
      </li>
      <button onClick={props.onDelete}>DELETE</button>
    </>
  );
};

export default Todo;
