import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("render Main", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render Main 2", () => {
  var todolist = [
    {
      id: 1,
      content: "Make this",
      checked: false
    },
    {
      id: 2,
      content: "Do That",
      checked: true
    }
  ];

  ReactDOM.render(<App data={todolist} />, document.getElementById("view"));
});
