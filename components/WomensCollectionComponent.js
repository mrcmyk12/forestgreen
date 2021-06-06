import React, { Component } from "react";
import { Card, Image, Button, Text, ListItem } from "react-native-elements";
import { FlatList } from "react-native";
import { WOMENSCOLLECTION } from "../shared/womenscollection";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		womenscollection: state.womenscollection
	};
};

class WomensCollection extends Component {
	static navigationOptions = {
		title: "Women's Collection"
	};

	render() {
		const { navigate } = this.props.navigation;

		const renderCollection = ({ item }) => {
			return (
				<Card
					title={item.title}
					featuredSubtitle={item.price}
					image={{ uri: baseUrl + item.image }}>
					<Text>{item.subtitle}</Text>
					<Button
						title="Add to Cart"
						titleStyle={{ color: "black" }}
						type="clear"
						color="white"
						onPress={() => navigate("WomensInfo", { womensId: item.id })}
						raised
					/>
				</Card>
			);
		};

		return (
			<FlatList
				data={this.props.womenscollection.womenscollection}
				renderItem={renderCollection}
				keyExtractor={(item) => item.id.toString()}
			/>
		);
	}
}

export default connect(mapStateToProps)(WomensCollection);
