import React from "react";
import Header from "./header/header";
import List from "./list/list";
import SecondFooter from "./footer/secondFooter";

function Main() {
  return (
    <div>
      <section className="todoapp">
        <Header />
        <List />
      </section>
      <SecondFooter />
    </div>
  );
}

export default Main;


// You must not forget the useDispatch under the react-redux. This is necessary for the button actions.