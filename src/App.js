import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import EmailList from "./Components/EmailList";
import Authenticate from "./Components/Authenticate";
import Home from "./Components/Home";
import EmailOutlook from "./Components/EmailOutlook";
import AuthenticOutlook from "./Components/AuthenticOutlook";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
console.log(code,'code');
  // useEffect(() => {
  //   if (code) {
  //     // User was redirected from the authorization callback
  //     handleAuthCallback(code);
  //   } else {
  //     // Check if the user is already authenticated
  //     checkAuthentication();
  //   }
  // }, [code]);

  // const handleAuthCallback = (code) => {
  //   fetch(`http://localhost:4000/gmail/auth/callback?code=${encodeURIComponent(code)}`)
  //     .then((response) => {
  //       if (response) {
  //         navigate("/emails");
  //       } else {
  //         console.error("Authentication failed.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Authentication failed:", error);
  //     });
  // };

  // const checkAuthentication = () => {
  //   fetch("http://localhost:4000/gmail/emails")
  //     .then((response) => {
  //       if (response) {
  //         setAuthenticated(true);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Authentication check failed:", error);
  //     });
  // };

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/emails" element={<EmailList />} />
          <Route path="/outlook/emails" element={<EmailOutlook />} />
          <Route path="/outlook/authenticate" element={<AuthenticOutlook />} />


        </Routes>
    </div>
  );
}

export default App;
