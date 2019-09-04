import React from "react";
import "./index.modules.css";
import ComponentOne from "../compo-1/";
import ComponentTwo from "../compo-2";
import ComponentNine from "../compo-9";
import ComponentTen from "../compo-10";
import Searchbar from "../sticky-searchbar";
import ComponentThree from "../compo-3";
function ContentWrapper() {
  return (
    <div>
      <ComponentOne />
      <ComponentTwo />
      <Searchbar />
      <ComponentThree />
      <ComponentThree />
      <ComponentThree />
      <ComponentThree />
      <ComponentNine />
      <ComponentTen />
    </div>
  );
}
export default ContentWrapper;
