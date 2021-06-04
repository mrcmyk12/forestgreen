import React, { Component } from "react";
import { FlatList, ScrollView } from "react-native";
import { ListItem, Tile, Card } from "react-native-elements";
import COLLECTIONS from "../shared/collections";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: COLLECTIONS
		};
	}

	render() {
		return (
			<ScrollView>
				<Tile
					imageSrc={require("../assets/pexels-teddy-tavan-3413666.jpg")}
					title="Shop Collection"
					featured
				/>
				<Tile
					imageSrc={require("../assets/pexels-monstera-6621308.jpg")}
					title="Shop Daily Essentials"
					featured
				/>
				<Tile
					imageSrc={require("../assets/pexels-mali-maeder-142497.jpg")}
					title="Blog"
					featured
				/>
			</ScrollView>
		);
	}
}

export default Home;
