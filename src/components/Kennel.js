import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

export default () => {
    return (
		<div>
			<NavBar />
			<ApplicationViews />
		</div>
    );
};