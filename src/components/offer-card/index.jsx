import React from "react";
import "./index.modules.css";
function OfferCard() {
  return (
    <div className="offercard">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/raiselogo.png"}
          className="raiselogotwo"
          alt="logo"
        />
      </div>
      <div>
        <h3 className="content-header">Plan Your Next Vacation</h3>
      </div>
      <div>
        <div className="card-para">
          Need Some Travel inspiration? Check out savings on Hotel.com AirBnb
          and SouthWest Airlines gift cards From Raise.
        </div>
      </div>
      <div className="btn-container">
        <button type="submit" className="btndecoration">
          TAKE A TRIP
        </button>
      </div>
    </div>
  );
}
export default OfferCard;
