import React from "react";
import Footer from "../footer/footer"

function list() {
  return (
    <div>
      
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark al as complete</label>

          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button className="destroy"></button>
              </div>
            </li>
          </ul>
        </section>
        <Footer />

    </div>
  );
}

export default list;
