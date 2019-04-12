import React from 'react';
import Createlist from './Createlist';
import Editlist from './Editlist';
import Todolist from './Todolist';
import Header from './Header'
import { BrowserRouter, Route, Link } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header />
          <br/>
          <Route path='/' exact component={Todolist} />
          <Route path='/edit/:id' component={Editlist} />
          <Route path='/create' component={Createlist} />
          My App
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
