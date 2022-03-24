import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "../../redux/todoSlice/todoSlice";


function Input() {
  const [inval, setInval] = useState("");
  const todoItems = useSelector((state) => state.todo.items);
  console.log(todoItems);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ id: nanoid(), inval, complete: false }));
    setInval("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => setInval(e.target.value)}
          value={inval}
        />
      </form>
    </div>
  );
}

export default Input;
