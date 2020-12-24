import PropTypes from "prop-types";

const Todo = ({ onTodoClick, onButtonClick, todo }) => {
  return (
    <li>
      <span
        onClick={onTodoClick}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => onButtonClick(todo.id)}>Delete</button>
    </li>
  );
};

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default Todo;
