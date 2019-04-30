import React from 'react';
import axios from 'axios';

class Createlist extends React.Component{
  state = {
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  }

  onChangeTodoDescription = (e) => {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible = (e) => {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  onChangeTodoPriority = (e) => {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:');
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };

    axios.post('http://localhost:3001/todos/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
  }

  render() {
    return (
      <div>
        <h3>Create new Todo</h3>
        <div onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Description:</label>
            <input
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
              type="text"
            />
            <label>Responsible:</label>
            <input
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
              type="text"
            />
          </div>
          <div className="inline fields">
            <label htmlFor="responsible">Level of Urgency:</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="low"
                  defaultChecked=""
                  tabIndex="0"
                  className="hidden"/>
                <label>Low</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="medium" tabIndex="0" className="hidden"/>
                <label>Medium</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="high" tabIndex="0" className="hidden"/>
                <label>High</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="ui primary button">
            Create Todo
          </button>
        </div>
      </div>
    );
  };
};

export default Createlist;
