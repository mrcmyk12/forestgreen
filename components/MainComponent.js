import React, { Component } from "react";
import Home from "./HomeComponent";
import { COLLECTIONS } from "../shared/collections";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: COLLECTIONS
		};
	}

	render() {
		return <Home collections={this.state.collections} />;
	}
}

export default Main;
