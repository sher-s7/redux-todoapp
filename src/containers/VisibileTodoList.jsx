import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/todo";
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETE,
} from "../actions/visibilityFilter";
import TodoList from "../components/TodoList";

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case SHOW_COMPLETE:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibileTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
