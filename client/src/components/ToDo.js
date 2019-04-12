import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedSubmit = this.handleCheckedSubmit.bind(this);
  }

  handleCheckedSubmit() {
    let checked;
    if (this.props.todoData.checked) {
      checked = false;
    } else {
      checked = true;
    }
    this.props.editChecked(
      this.props.todoData.id,
      this.props.todoData.content,
      checked
    );
  }

  renderToDo() {
    return (
      <li
        className={"item " + (this.props.todoData.checked ? "checked" : "")}
        id={this.props.todoData.id}
      >
        <div className="content" onClick={this.handleCheckedSubmit}>
          <input
            type="checkbox"
            value={this.props.todoData.id}
            name="checked"
            checked={this.props.todoData.checked}
          />
          {this.props.todoData.content}
        </div>
        <span
          className="spandeletebtn"
          onClick={() => this.props.deleteForm(this.props.todoData.id)}
        >
          <div className="deletebtn">&times;</div>
        </span>
      </li>
    );
  }

  render() {
    return this.renderToDo();
  }
}

export default ToDo;
