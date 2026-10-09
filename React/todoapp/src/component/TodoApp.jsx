import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items : []
  };

  handleChange = event => {
    this.setState({
      input: event.target.value,
    }) ;
  };

  storeItems = event => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input]
    }) ;
  }

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit = {this.storeItems} >
          <h2>Todo App</h2>
          <input type="text" name="" value={input} onChange={this.handleChange} id="" placeholder="Enter Items..." />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i className="fa-solid fa-trash-alt"></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}