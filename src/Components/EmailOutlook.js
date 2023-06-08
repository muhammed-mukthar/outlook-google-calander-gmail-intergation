import React, { useEffect, useState } from "react";

import axios from "axios";
import EmailOutlookDetails from "./EmailOutlookDetails";
const EmailOutlook = () => {
  const [emails, setEmails] = useState([]);
  const [emailDetails, setEmailDetails] = useState(false);

  const handleGetEmails = () => {
    axios
      .get("http://localhost:4000/outlook/sent/emails")
      .then((data) => {
        console.log(data, "this is data");
        setEmails(data.data);
      })
      .catch((error) => {
        console.error("Error retrieving emails:", error);
      });
  };
  useEffect(() => {
    handleGetEmails();
  }, []);

  const handleOnClick=(data)=>{
setEmailDetails(data.id)  }
  return (
    <div>
      {emailDetails ? <EmailOutlookDetails emailDetail={emailDetails}/> : ""}
      <h1>List of Emails</h1>
      <button onClick={handleGetEmails}>Get Emails</button>
      <ul>
        {emails?.map((email) => (
          <li onClick={()=>handleOnClick(email)} key={email.emailId}>
            subject:{email.subject} sender:{email.sender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailOutlook;
