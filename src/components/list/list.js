import React from "react";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";

function List() {
  const items = useSelector((state) => state.todo.items);


  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {items.map((data) => {
            return (
              <li key={data.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{data.title}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default List;
