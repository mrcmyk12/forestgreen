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

	static navigationOptions = {
		title: "Home"
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<ScrollView>
				<Tile
					imageSrc={require("../assets/pexels-teddy-tavan-3413666.jpg")}
					title="Shop Collection"
					onPress={() => navigate("Collection")}
					featured
				/>
				<Tile
					imageSrc={require("../assets/pexels-monstera-6621308.jpg")}
					title="Shop Daily Essentials"
					onPress={() => navigate("DailyEssentials")}
					featured
				/>
				<Tile
					imageSrc={require("../assets/pexels-mali-maeder-142497.jpg")}
					title="Blog"
					onPress={() => navigate("Blog")}
					featured
				/>
			</ScrollView>
		);
	}
}

export default Home;
