import React from "react";
import "./index.modules.css";
function ComponentNine() {
  return (
    <div className="component-9">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/raiselogo.png"}
          className="raiselogotwo"
          alt="logo"
        />
      </div>
      <div>
        <h3>Plan Your Next Vacation</h3>
      </div>
      <div>
        <div className="paracompo">
          Need Some Travel inspiration? Check out savings on Hotel.com AirBnb
          and SouthWest Airlines gift cards From Raise.
        </div>
      </div>
      <div>
        <button type="submit">Take a trip</button>
      </div>
    </div>
  );
}
export default ComponentNine;
