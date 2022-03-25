import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveFilter,
  clearCompleted,
} from "../../redux/todoSlice/todoSlice";

function Footer() {
  const items = useSelector((state) => state.todo.items);
  const filterList = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector((state) => state.todo.activeFilter);

  const dispatch = useDispatch();

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{filterList} </strong>
          item{filterList > 1 && "s"} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={activeFilter === "All" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("All"))}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "Active" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("Active"))}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "Completed" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("Completed"))}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;


// You can create clean code by use Selector and Prepare. 