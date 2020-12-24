import TodoInput from "../components/TodoInput";
import Todos from "../components/TodoList";

function TodoApp() {
  return (
    <div className="TodoApp">
      <TodoInput />
      <Todos />
    </div>
  );
}

export default TodoApp;
