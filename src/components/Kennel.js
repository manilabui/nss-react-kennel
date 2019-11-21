import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

class Kennel extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ApplicationViews />
      </div>
    );
  };
};

export default Kennel;