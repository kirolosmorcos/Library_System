import React from "react";
import '../App.css'; 
import { useState } from "react";
const Home = () => {
    const [books,setbooks]=useState([])

    // States for checking the errors
  
    const [error, setError] = useState(false);


    const Get=async(e) =>
    {
        
         let result =  await fetch('http://localhost:8080/library/books', {
             method:'Get',
                         
                             headers: {
                               'Content-Type': 'application/json',
                               'Accept':'application/json'
                             }
                         }) 
                        
                         if (result.ok) {
                          setbooks(await result.json()); 
                         console.warn(books);
                         setError(false)
                        
                          
                         }
                         else 
                         {
                            setError(true)
                         }
                        
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
            <h1>Must login first</h1>
        </div>
    );
    };

    return (
      <div>
        <div>
            <h1>Books List</h1>
        </div>

         {/* Calling to the methods */}
         <div className="messages">
                {errorMessage()}
              
            </div>
         
      <div>
      <button onClick={Get} className="btn" type="submit">
                    Bookslist
                </button>
                </div>
                <ul>
        
                {books.map(book => (
        <li key={book.id}>
          <h2>{book.name}</h2>
        </li>
      ))}
        
      </ul>
      </div>
    );
  };
  
  export default Home;