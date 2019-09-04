import React from "react";
import "./index.modules.css";
function Searchbar() {
  return (
    <div className="search-div">
      <div className="search-bar">
        <input type="text" className="compo-2-input" />
        <button className="searchbutton">
          <i class="fa fa-search" />
        </button>
      </div>
    </div>
  );
}
export default Searchbar;
