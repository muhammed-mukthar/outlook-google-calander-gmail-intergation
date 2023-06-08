
  import React from 'react'
  import {  Link } from 'react-router-dom';

  const Home = () => {
    return (
        <div>
        <h1>Welcome to Gmail Viewer</h1>
        <p>Please authenticate to view your Gmail emails.</p>
        <Link to="/authenticate">Authenticate</Link>
        <p>Please authenticate to view your outlook emails.</p>
        <Link to="/outlook/authenticate">Authenticate</Link>
      </div>    )
  }
  
  export default Home