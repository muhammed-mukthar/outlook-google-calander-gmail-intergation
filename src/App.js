import React, { useEffect, useState } from 'react';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // User was redirected from the authorization callback
      handleAuthCallback(code);
    } else {
      // Check if the user is already authenticated
      checkAuthentication();
    }
  }, []);

  const handleAuthCallback = (code) => {
    fetch(`http://localhost:4000/auth/callback?code=${encodeURIComponent(code)}`)
      .then((response) => {
        if (response.ok) {
          setAuthenticated(true);
        } else {
          console.error('Authentication failed.');
        }
      })
      .catch((error) => {
        console.error('Authentication failed:', error);
      });
  };
  

  const checkAuthentication = () => {
    fetch('http://localhost:4000/emails')
      .then((response) => {
        if (response.ok) {
          setAuthenticated(true);
        }
      })
      .catch((error) => {
        console.error('Authentication check failed:', error);
      });
  };

  const handleAuthClick = () => {
    window.location.href = 'http://localhost:4000/auth';
  };

  const handleLogoutClick = () => {
    setAuthenticated(false);
  };

  const handleGetEmails = () => {
    fetch('http://localhost:4000/emails')
      .then((response) => response.json())
      .then((data) => setEmails(data))
      .catch((error) => {
        console.error('Error retrieving emails:', error);
      });
  };

  return (
    <div>
      <h1>List of Emails</h1>
      {authenticated ? (
        <div>
          <button onClick={handleGetEmails}>Get Emails</button>
          <button onClick={handleLogoutClick}>Logout</button>
          {emails.map((email) => (
            <div key={email.id}>{email.subject}</div>
          ))}
        </div>
      ) : (
        <button onClick={handleAuthClick}>Authenticate</button>
      )}
    </div>
  );
}

export default App;