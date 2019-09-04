import React from "react";
import "./index.modules.css";
function ComponentOne() {
  return (
    <div className="component-1">
      <div className="header-container-1">
        <img
          src={process.env.PUBLIC_URL + "/raiselogo.png"}
          className="raiselogo"
          alt="logo"
        />
      </div>
      <div className="header-container-2">
        <img
          src={process.env.PUBLIC_URL + "/raiselogo.png"}
          className="raiselogo"
          alt="logo"
        />

        <button className="btn">&#9776;</button>
      </div>
    </div>
  );
}
export default ComponentOne;
