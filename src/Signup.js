import React from "react";

const Signup = props => {
  return (
    <form>
      <div id="p1">
        {" "}
        Sign in to IBM to discover all the data available in CEDP{" "}
      </div>
      <div className="container1">
        <label className="lb1">IBM W3 ID</label>
        <input type="text" />

        <label className="lb1">W3 Password</label>
        <input type="password" />

        <button type="submit">Sign In</button>
        <span className="lb2">Forgot your internet password ?</span>

      </div>
    </form>
  );
};

export default Signup;
