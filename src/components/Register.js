import React from "react";
import { useState } from "react";
import '../App.css'; 


export default function Register() {
    // States for registration
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[role,setRole]=useState("");
    const[response,setResponse]=useState("");
    
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

     // Handling the password change
     const handleRole= (e) => {
        setRole(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (username === "" || password === "" || role === "") {
            setError(true);
            setResponse('PLease enter all fields!')
        } else {
           const roles=new Array(role);
               
           const item={
            username,
            password,
             roles

           }
           console.warn(role)
            console.warn(item)
             let result = await  fetch('http://localhost:8080/user/register', {
                 method:'Post',
                 body:JSON.stringify(item),
                             
                                 headers: {
                                   'Content-Type': 'application/json',
                                   'Accept':'application/json'
                                 }
                             }) 
                             setResponse(await result.text());
                             if (result.ok) {
                             
                               setSubmitted(true)
                          setError(false)
                             }
                            else{
                                 setError(true)
                         
                                 setSubmitted(false)

                            }
                      console.warn("result",response)
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>{response}</h1>
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
        <div className="form">
            <div>
                <h1>User Registration</h1>
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

                <label className="label">Role</label>
                <input
                    onChange={handleRole}
                    className="input"
                    value={role}
                    type="text"
                />


                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}