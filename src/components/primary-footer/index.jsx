import React from "react";
import "./index.modules.css";

function PrimaryFooter() {
  return (
    <div className="primaryfooter">
      <div className="primaryfooter-content">
        <h2 className="content-bold">Download the Raise App</h2>
        <p className="para">Shop, save and redeem your cards on the go</p>
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/raiselogo.png"}
          className="imagelogo"
          alt="logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/raiselogo.png"}
          className="imagelogo"
          alt="logo"
        />
      </div>
      <div className="giantpic-container">
        <img
          src={process.env.PUBLIC_URL + "/raiselogo.png"}
          className="giant-pic"
          alt="logo"
        />
      </div>
    </div>
  );
}
export default PrimaryFooter;
