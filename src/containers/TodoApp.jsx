import AddTodo from "./AddTodo";
import VisibileTodoList from "./VisibileTodoList";
import VisibilityFilters from "./VisibilityFilters";

function TodoApp() {
  return (
    <div className="TodoApp">
      <AddTodo />
      <VisibileTodoList />
      <VisibilityFilters />
    </div>
  );
}

export default TodoApp;
