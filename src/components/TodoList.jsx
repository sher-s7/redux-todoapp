import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
