import React from "react";
import { useState } from "react";
import '../App.css'; 


export default function Admin() {
    // States for registration
   
    const [name, setName] = useState("");
    const [id, setId] = useState("");
   
    const[response,setResponse]=useState("");
    
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const token = localStorage.getItem('authToken') || 'No token found';
   //console.log(token)

    // Handling the email change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleId = (e) => {
        setId(e.target.value);
        setSubmitted(false);
    };

    
    // Handling the form submission
    const handlePost = async(e) => {
       
        
          
        e.preventDefault();
           const item={
           name

           }
          
          
            console.log(item)
            console.log(token)
             let result = await  fetch('http://localhost:8080/library/admin', {
                 method:'Post',
                 body:JSON.stringify(item),
                             
                 headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer `+token,
                             }}) 
                            
                             if (result.ok) {
                              setResponse('Book is added successfuly');
                              console.log(response)
                               setSubmitted(true)
                               setError(false)
                             }
                            else{
                                 setError(true)
                         setResponse('Error you are not authorized')
                                 setSubmitted(false)

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
                <h1>Admin playground</h1>
                {/* <p><strong>Authentication Token:</strong> {token}</p> */}
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name of Book</label>
                <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="text"
                />

                
                <label className="label">Id</label>
                <input
                    onChange={handleId}
                    className="input"
                    value={id}
                    type="text"
                />

               


                <button onClick={handlePost} className="btn" type="submit">
                    Add Book
                </button>
                {/* <button onClick={handleSubmit} className="btn" type="submit">
                    Update Book
                </button>
                <button onClick={handleSubmit} className="btn" type="submit">
                   Delete Book
                </button> */}
            </form>
        </div>
    );
}