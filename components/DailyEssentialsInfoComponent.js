import React, { Component } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { Card, Image, ButtonGroup, Button } from "react-native-elements";
import { connect } from "react-redux";
import { postDailyEssentialsCart } from "../redux/ActionCreators";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		dailyessentials: state.dailyessentials,
		dailyessentialscart: state.dailyessentialscart
	};
};

const mapDispatchtoProps = {
	postDailyEssentialsCart: (essentialsId) =>
		postDailyEssentialsCart(essentialsId)
};

function RenderItem(props) {
	const { essentialitem } = props;

	if (essentialitem) {
		return (
			<ScrollView>
				<Image
					source={{ uri: baseUrl + essentialitem.image }}
					style={{ height: 400 }}
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
						onPress={() => {
							props.addToCart();
							Alert.alert(
								"Item Added to Cart",
								`${essentialitem.title} Added to Cart`,
								[
									{
										text: "Ok",
										onPress: () => console.log("Ok Pressed"),
										style: "cancel"
									}
								]
							);
						}}
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

	addToCart(essentialsId) {
		this.props.postDailyEssentialsCart(essentialsId);
	}

	render() {
		const essentialsId = this.props.navigation.getParam("essentialsId");
		const essentialitem = this.props.dailyessentials.dailyessentials.filter(
			(essentialitem) => essentialitem.id === essentialsId
		)[0];

		return (
			<RenderItem
				essentialitem={essentialitem}
				addToCart={() => this.addToCart(essentialsId)}
			/>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchtoProps
)(DailyEssentialsInfo);
