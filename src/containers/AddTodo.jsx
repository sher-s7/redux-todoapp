import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo";

const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <>
      <input value={todo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>CREATE</button>
    </>
  );
};

export default connect()(AddTodo);
