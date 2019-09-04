import React from "react";
import "./index.modules.css";
function ComponentThree() {
  return (
    <div className="component-3">
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
      </div>
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
      </div>
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
      </div>
    </div>
  );
}
export default ComponentThree;
