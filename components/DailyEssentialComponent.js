import React, { Component } from "react";
import { Card, Image, Button, Text, ListItem } from "react-native-elements";
import { FlatList } from "react-native";
import { DAILYESSENTIALS } from "../shared/dailyessentialscollection";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		dailyessentials: state.dailyessentials
	};
};

class DailyEssentials extends Component {
	static navigationOptions = {
		title: "Daily Essentials"
	};

	render() {
		const { navigate } = this.props.navigation;

		const renderCollection = ({ item }) => {
			return (
				<Card
					title={item.title}
					featuredSubtitle={item.price}
					image={{ uri: baseUrl + item.image }}>
					<Button
						title="More Info"
						titleStyle={{ color: "black" }}
						type="clear"
						color="white"
						onPress={() =>
							navigate("DailyEssentialsInfo", { essentialsId: item.id })
						}
						raised
					/>
				</Card>
			);
		};

		return (
			<FlatList
				data={this.props.dailyessentials.dailyessentials}
				renderItem={renderCollection}
				keyExtractor={(item) => item.id.toString()}
			/>
		);
	}
}

export default connect(mapStateToProps)(DailyEssentials);
