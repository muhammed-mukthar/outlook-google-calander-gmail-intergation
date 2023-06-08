import axios from "axios";
import React, { useEffect, useState } from "react";

const EmailDetails = ({ emailDetail }) => {
  const [details, SetDetails] = useState({});
 
  
  const handleGetEmailDetails = () => {
    axios
      .get(`http://localhost:4000/gmail/emails/${emailDetail}`)
      .then((data) => {
        console.log(data, "this is data");
        SetDetails(data.data);
      })
      .catch((error) => {
        console.error("Error retrieving emails:", error);
      });
  };
  useEffect(() => {
    if (emailDetail) {
      handleGetEmailDetails(emailDetail);
    }
  }, [emailDetail]);
  return (
    <div>
      <h2>{details.snippet}</h2>
    </div>
  );
};

export default EmailDetails;
