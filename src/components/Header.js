import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='ui container'>
      <div class="ui menu">
        <div class="header item">
          MERN Todo List
        </div>
        <div className="item">
          <Link to='/' className='item'>
            Home
          </Link>
        </div>
        <div className="item">
          <Link to='/create' className='item'>
            Create
          </Link>
        </div>
        <div className="item">
          <Link to='/edit/:id' className='item'>
            Edit
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
