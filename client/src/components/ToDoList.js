import React, { Component } from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo";

class ToDoList extends Component {
  render() {
    return (
      <section className="todo">
        <ul className="todo-list" id="todo">
          {this.props.fetchData.map(todo => {
            return (
              <ToDo
                todoData={todo}
                key={todo.id}
                hideCompleted={this.props.hideCompleted}
                deleteForm={this.props.deleteForm}
                editForm={this.props.editForm}
                editChecked={this.props.editChecked}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ToDoList;
