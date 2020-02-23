import React from "react";
import Signup from "./Signup";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="div1">
        <h4>IBM Cognitive Enterprise Data Platform(CEDP)</h4>
        <h2>Welcom to IBM CEDP Data Discovery</h2>

        <p>
          Discover data by leveraging business metadata in the most trusted,
          secure and connected way, and ready for AI Services. <br />
          <br />
          IBM cognitive Enterprise Data Platform, knows as CEDP, hosts and
          provides infrastructure, governance, stewardship, and enablement
          services for data.
          <br />
          <a href="www.ibm.com">Learn more-></a>
        </p>
      </div>
      <div className="div2">
        <Signup />
      </div>
    </div>
  );
}
