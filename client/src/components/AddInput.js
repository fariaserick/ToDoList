import React, { Component } from "react";

class AddInput extends Component {
  handleForm(e) {
    this.props.submitForm(e);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.handleForm(e)}>
          <div className="form-wrapper" name="checkListForm">
            <input type="text" id="item" name="content" required />
            <button id="addbttn" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInput;
