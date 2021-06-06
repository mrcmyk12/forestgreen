import React, { Component } from "react";
import { Card, Text, Image, Tile } from "react-native-elements";
import { View, FlatList, ScrollView } from "react-native";
import { NavigationEvents } from "react-navigation";

class Collection extends Component {
	static navigationOptions = {
		title: "Shop Our Collections"
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View>
				<Tile
					title="Shop Men's Collection"
					featured
					imageSrc={require("../assets/pexels-cottonbro-6626999.jpg")}
					onPress={() => navigate("MensCollection")}
				/>
				<Tile
					title="Shop Women's Collection"
					featured
					imageSrc={require("../assets/pexels-anna-shvets-4672244.jpg")}
					onPress={() => navigate("WomensCollection")}
				/>
			</View>
		);
	}
}

export default Collection;
