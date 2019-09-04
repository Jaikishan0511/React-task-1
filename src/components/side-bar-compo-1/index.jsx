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
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <h2>Animated Sidenav Example</h2>
        <p>Click on the element below to open the side navigation menu.</p>
        <button onClick={this.onSubmit}>afdsafas</button>
      </div>
    );
  }
}
export default Sidebar;
