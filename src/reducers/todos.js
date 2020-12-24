import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, completed: !todo.completed }
      );
    default:
      return state;
  }
};

export default todos;
