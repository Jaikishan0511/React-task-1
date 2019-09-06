import React from "react";
import "./index.modules.css";
function Slider() {
  return (
    <div className="image-container">
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
      </div>
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
      </div>
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
export default Slider;
