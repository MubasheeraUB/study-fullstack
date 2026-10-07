import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  render() {
    return (
      <div className="todo-container">
        <form className="input-section">
          <h2>Todo App</h2>
          <input type="text" name="" id="" placeholder="Enter Items..." />
        </form>

        <ul>
          <li>Items</li>
          <li>Items1</li>
        </ul>
      </div>
    );
  }
}