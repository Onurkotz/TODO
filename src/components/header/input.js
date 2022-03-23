import { useState } from "react";
import { useSelector } from "react-redux";

function Input() {
  const [inval, setInval] = useState("");
  const todoItems = useSelector((state) => state.todo.items);
  console.log(todoItems);
  const handleSubmit = () => {
    console.log(inval);
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
