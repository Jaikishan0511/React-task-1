import React from "react";
import "./index.modules.css";
function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-info">
        <h2 className="slider-header-info">Best Sellers</h2>
        <div className="slider-content-info">
          <a href="/">SEE ALL</a>
        </div>
      </div>
      <div className="image-container">
        <div className="card">
          <div>
            <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
          </div>
          <span className="slide-title">XYZ</span>
          <span className="slide-content-offer">XYZ</span>
        </div>
        <div className="card">
          <div>
            <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
          </div>
          <span className="slide-title">XYZ</span>
          <span className="slide-content-offer">XYZ</span>
        </div>
        <div className="card">
          <div>
            <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
          </div>
          <span className="slide-title">XYZ</span>
          <span className="slide-content-offer">XYZ</span>
        </div>
        <div className="card">
          <div>
            <img src={process.env.PUBLIC_URL + "/raiselogo.png"} alt="logo" />
          </div>
          <span className="slide-title">XYZ</span>
          <span className="slide-content-offer">XYZ</span>
        </div>
      </div>
    </div>
  );
}
export default Slider;
