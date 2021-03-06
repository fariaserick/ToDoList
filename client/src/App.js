import React, { Component } from "react";
import Header from "./components/Header";
import AddInput from "./components/AddInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchDataLoaded: false,
      fetchData: [],
      content: ""
    };
    this.hideCopletedTasks = this.hideCopletedTasks.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.editForm = this.editForm.bind(this);
    this.editChecked = this.editChecked.bind(this);
  }

  componentDidMount() {
    this.fetchAllData();
  }

  hideCopletedTasks(checked) {
    if (checked) {
      fetch("/api/todolist/notcompleted")
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          this.setState(prevState => {
            return {
              fetchDataLoaded: true,
              fetchData: responseJson.data.newlist
            };
          });
        });
    } else {
      this.fetchAllData();
    }
  }

  fetchAllData() {
    fetch("/api/todolist")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState(prevState => {
          return {
            fetchDataLoaded: true,
            fetchData: responseJson.data.todolist
          };
        });
      });
  }

  deleteForm(id) {
    fetch(`/api/todolist/${id}`, {
      method: "DELETE"
    }).then(response => {
      if (response.status === 200) {
        this.fetchAllData();
      }
    });
  }

  editForm(e, id) {
    fetch(`/api/todolist/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: e.target.content.value,
        checked: e.target.checked.value
      })
    }).then(response => {
      this.fetchAllData();
    });
  }

  editChecked(id, content, checked) {
    fetch(`/api/todolist/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: content,
        checked: checked
      })
    }).then(response => {
      this.fetchAllData();
    });
  }

  submitForm(e) {
    fetch("/api/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: e.target.content.value
      })
    }).then(response => {
      if (response.status === 200) {
        this.fetchAllData();
      }
    });
    e.target.content.value = "";
  }

  fetchComplete() {
    if (this.state.fetchDataLoaded) {
      return (
        <ToDoList
          fetchData={this.state.fetchData}
          deleteForm={this.deleteForm}
          editForm={this.editForm}
          editChecked={this.editChecked}
        />
      );
    } else return <p className="loading">Loading....</p>;
  }

  render() {
    var data = this.props.data || [];
    return (
      <div id="view" className="main">
        <Header
          fetchData={this.state.fetchData}
          hideCopletedTasks={this.hideCopletedTasks}
        />
        <AddInput submitForm={this.submitForm} />
        {this.fetchComplete()}
      </div>
    );
  }
}

export default App;
