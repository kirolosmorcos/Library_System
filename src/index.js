import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 8080;

// app.use(cors);

// app.use(bodyParser.json());

// app.post('/user/register', (req, res) => {
//   const { username, password,role } = req.body;
//   console.log('User registered:', { username,  password,role });
//   res.status(200).json({ message: 'Registration successful' });
//  // res.status(409).json({message:'already exist'})
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
