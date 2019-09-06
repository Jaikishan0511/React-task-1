import React from "react";
import "./index.modules.css";

function Modulecontainer() {
  return (
    <div className="modulecontainer">
      <div className="content">
        <h2>Sign up today!</h2>
        <p className="para-content">Get $10 off your first purchase.</p>
      </div>
      <div className="join-container">
        <input className="input" />
        <button className="button">JOIN</button>
      </div>
    </div>
  );
}
export default Modulecontainer;
