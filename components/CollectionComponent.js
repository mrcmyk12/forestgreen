import React from "react";
import { Card, Text, Image, Tile } from "react-native-elements";
import { View, FlatList, ScrollView } from "react-native";

class Collection extends Component {
	render() {
		<View>
			<Tile
				title="Shop Men's Collection"
				featured
				image={require("../assets/pexels-cottonbro-6626999.jpg")}
			/>
			<Tile
				title="Shop Women's Collection"
				featured
				image={require("../assets/pexels-anna-shvets-4672244.jpg")}
			/>
			<Tile
				title="Shop Unisex Collection"
				featured
				image={require("../assets/pexels-monstera-6311606.jpg")}
			/>
		</View>;
	}
}
