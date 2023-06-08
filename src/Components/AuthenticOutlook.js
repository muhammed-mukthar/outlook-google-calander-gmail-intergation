  
  import React from 'react'
  
  

  const AuthenticOutlook = ( ) =>{
    const handleAuthClick = () => {
        window.location.href = 'http://localhost:4000/outlook/auth';
      };
    return (
      <div>
        <h1>Authentication</h1>
        <p>Please authenticate with your outlook account.</p>
        <button onClick={handleAuthClick}>Authenticate</button>
      </div>
    );
    }
  
  export default AuthenticOutlook