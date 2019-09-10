import React from "react";
import "./index.modules.css";
import Menubar from "../menu-bar";
import HeaderContent from "../header-content";
import OfferCard from "../offer-card";
import Searchbar from "../sticky-searchbar";
import Slider from "../slider";
import Sidebar from "../side-bar-compo-1";
import Modulecontainer from "../footer-module-container";
import PrimaryFooter from "../primary-footer";
import Footerbutton from "../footer-button-box";

function ContentWrapper() {
  return (
    <div className="pagecontainer">
      <Menubar />
      <Sidebar />
      <HeaderContent />
      <Searchbar />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <OfferCard />
      <OfferCard />
      <Modulecontainer />
      <PrimaryFooter />
      <Footerbutton />
    </div>
  );
}
export default ContentWrapper;
