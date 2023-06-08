  
  import React from 'react'
  
  

  const Authenticate = ( ) =>{
    const handleAuthClick = () => {
        window.location.href = 'http://localhost:4000/gmail/auth';
      };
    return (
      <div>
        <h1>Authentication</h1>
        <p>Please authenticate with your Gmail account.</p>
        <button onClick={handleAuthClick}>Authenticate</button>
      </div>
    );
    }
  
  export default Authenticate