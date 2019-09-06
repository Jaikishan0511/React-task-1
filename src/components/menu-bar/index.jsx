import React from "react";
import "./index.modules.css";
function Menubar() {
  return (
    <div className="menubar">
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
      </div>
    </div>
  );
}
export default Menubar;
