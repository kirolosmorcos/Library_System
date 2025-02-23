'./App.css';
import React from 'react';
import Register from './components/Register.js';
import Login from'./components/Login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Admin from './components/Admin.js';

function App() {
    return (
        <Router>
        <div>
          <Navbar />
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin" element={<Admin/>} />
          
        </Routes>
        </div>
      </Router>
    );
  };
export default App;

