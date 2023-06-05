import React, { useEffect, useState } from 'react';

import axios from 'axios'
const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/emails') // Change the URL if necessary
      .then((response) => response.json())
      .then((data) => {
        setEmails(data.messages);
      })
      .catch((error) => {
        console.error('Error retrieving email list:', error);
      });
  }, []);

  return (
    <div>
      <h1>Email List</h1>
      {emails.map((email) => (
        <div key={email.id}>{email.snippet}</div>
      ))}
    </div>
  );
};

export default EmailList;
