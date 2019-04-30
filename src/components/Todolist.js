import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Todolist extends React.Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    axios.get('http://localhost:3001/todos/')
      .then(response => {
        this.setState({ todos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  todoList = () => {
    return(
      this.state.todos.map((currentTodo, i) => {
        return <Todo todo={currentTodo} key={i} />;
      });
    )
  }

  render() {
    return(
      <div>
        <h3>Todos List</h3>
        <table class="ui single line table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    );
  };
};

export default Todolist;
