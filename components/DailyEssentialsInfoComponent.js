import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card, Image, ButtonGroup, Button } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		dailyessentials: state.dailyessentials
	};
};

function RenderItem({ essentialitem }) {
	if (essentialitem) {
		return (
			<ScrollView>
				<Image
					source={{ uri: baseUrl + essentialitem.image }}
					style={{ height: 800 }}
				/>
				<Card
					title={essentialitem.title}
					titleStyle={{ fontSize: 36, fontWeight: "bold" }}
					wrapperStyle={{ alignItems: "center" }}>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "bold",
							marginBottom: 10
						}}>
						{essentialitem.price}
					</Text>

					<Button
						title="Add to Cart"
						titleStyle={{ fontWeight: "bold" }}
						buttonStyle={{ backgroundColor: "black" }}
					/>
				</Card>
			</ScrollView>
		);
	}
	return <View />;
}

class DailyEssentialsInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static navigationOptions = {
		title: "Shop Daily Essentials"
	};

	render() {
		const essentialsId = this.props.navigation.getParam("essentialsId");
		const essentialitem = this.props.dailyessentials.dailyessentials.filter(
			(essentialitem) => essentialitem.id === essentialsId
		)[0];

		return <RenderItem essentialitem={essentialitem} />;
	}
}

export default connect(mapStateToProps)(DailyEssentialsInfo);
