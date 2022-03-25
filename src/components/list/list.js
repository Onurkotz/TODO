import React from "react";
import Footer from "../footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy } from "../../redux/todoSlice/todoSlice";

let filtered = [];

function List() {
  const items = useSelector((state) => state.todo.items);
  console.log(items);

  const activeFilter = useSelector((state) => state.todo.activeFilter);

  const dispatch = useDispatch();

  filtered = items;

  if (activeFilter !== "All") {
    filtered = items.filter((todo) =>
      activeFilter === "Active"
        ? todo.completed === false
        : todo.completed === true
    );
  }

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };

  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {filtered.map((item) => (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={() => dispatch(toggle({ id: item.id }))}
                  checked={item.completed}
                />
                <label>{item.title}</label>
                <button
                  className="destroy"
                  onClick={() => handleDestroy(item.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default List;
