import axios from "axios";
import React, { useEffect, useState } from "react";

const EmailOutlookDetails = ({ emailDetail }) => {
  const [details, SetDetails] = useState({});

  const handleGetEmailDetails = () => {
    axios
      .get(`http://localhost:4000/outlook/emails/${emailDetail}`)
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
      <h3> date:{details.receivedDateTime}</h3>
      <h2> sender :{details?.sender}</h2>
      {details?.receivers?.map((data) => {
        <h2> reciever : {data} </h2>;
      })}
      <h2> {details.subject}</h2>
    </div>
  );
};

export default EmailOutlookDetails;
