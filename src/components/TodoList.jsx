import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/actions";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!todos || !todos.length) {
    return <p>NO TODOS</p>;
  }
  const handleButtonClick = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleTodoClick = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          onTodoClick={() => handleTodoClick(todo.id)}
          onButtonClick={() => handleButtonClick(todo.id)}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default Todos;
