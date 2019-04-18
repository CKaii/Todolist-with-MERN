import React from 'react';
import Createlist from './Createlist';
import Editlist from './Editlist';
import Todolist from './Todolist';
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='ui container'>
        <Header />
          <br/>
          <Route path='/' exact component={Todolist} />
          <Route path='/edit/:id' component={Editlist} />
          <Route path='/create' component={Createlist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
