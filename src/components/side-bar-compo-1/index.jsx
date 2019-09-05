import React from "react";
import "./index.modules.css";
class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    };
  }
  onSubmit = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
    if (this.state.isClicked) {
      console.log("clicked", this.state.isClicked);
      return;
    }
  };
  render() {
    return (
      <div>
        <div
          id="mySidenav"
          className={this.state.isClicked ? "sidenav-1" : "sidenav"}
        >
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Clients</a>
          <a href="/">Contact</a>
        </div>
        <div
          className="btncontainer"
          id={this.state.isClicked ? "main1" : "main"}
        >
          <button className="btn" onClick={this.onSubmit}>
            &#9776;
          </button>
        </div>
      </div>
    );
  }
}
export default Sidebar;
