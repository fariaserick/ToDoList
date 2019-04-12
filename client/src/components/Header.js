import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
    debugger;
    this.props.hideCopletedTasks(value);
  }

  render() {
    let count = this.props.fetchData.length;
    return (
      <div className="header">
        <h1>
          To Do List ({count})
          <span>
            <input
              name="checked"
              type="checkbox"
              checked={this.state.checked}
              onClick={this.handleInputChange}
            />
            Hide Completed Tasks
          </span>
        </h1>
      </div>
    );
  }
}

export default Header;
