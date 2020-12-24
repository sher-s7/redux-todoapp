import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/actions";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <div>
      <input value={todo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>ADD TODO</button>
    </div>
  );
};

export default TodoInput;
