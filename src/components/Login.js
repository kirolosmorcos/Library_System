import React from 'react';
import { useState } from "react";
import '../App.css'; 

export default function Login  ()  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[response,setResponse]=useState("");
    const[token,setToken]=useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

   

    // Handling the email change
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (username === "" || password === "" ) {
            setError(true);
            setResponse('PLease enter all fields!')
        } else {
           
               
            let item={username,password}
            console.warn(item)
             let result = await  fetch('http://localhost:8080/user/login', {
                 method:'Post',
                 body:JSON.stringify(item),
                             
                                 headers: {
                                   'Content-Type': 'application/json',
                                   'Accept':'application/json'
                                 }
                             }) 
                           
                             if (result.ok) {
                               setResponse('Loged in successful');
                              console.log(response)
                               setToken(await result.text())
                               localStorage.setItem('authToken',token)
                               console.log(localStorage.getItem('authToken'))
                               setSubmitted(true)
                          setError(false)
                             }
                            else{
                                 setError(true)
                                 setResponse('Error in login');
                                 setSubmitted(false)

                            }
                      console.warn("result",response)
        }
    };
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>{response}  </h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>{response}</h1>
            </div>
        );
    };
  return (
    <div className="login">
    <div>
        <h1>User Login</h1>
        <p>{token}</p>
    </div>

    {/* Calling to the methods */}
    <div className="messages">
        {errorMessage()}
        {successMessage()}
    </div>

    <form>
        {/* Labels and inputs for form data */}
        <label className="label">Username</label>
        <input
            onChange={handleUsername}
            className="input"
            value={username}
            type="text"
        />

        
        <label className="label">Password</label>
        <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
        />

      


        <button onClick={handleSubmit} className="btn" type="submit">
            Submit
        </button>
    </form>
</div>
  );
}

