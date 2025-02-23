import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Navbar = () => {
    return (
      <nav>
        <ul>
       
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;