import React from "react";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";

function List() {
  const items = useSelector((state) => state.todo.items);
  console.log(items);

  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {items.map((item) => (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{item.title}</label>
                <button className="destroy"></button>
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
