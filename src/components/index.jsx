import React from "react";
import "./index.modules.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContentWrapper from "./component-wrapper";
import Sidebar from "./side-bar-compo-1";
import {} from "./";

function Page() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={ContentWrapper} />
            <Route path="/menu" component={Sidebar} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Page;
