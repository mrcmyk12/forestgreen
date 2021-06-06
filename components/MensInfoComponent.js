import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card, Image, ButtonGroup, Button } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		menscollection: state.menscollection
	};
};

function RenderItem({ mensitem }) {
	if (mensitem) {
		return (
			<ScrollView>
				<Image
					source={{ uri: baseUrl + mensitem.image }}
					style={{ height: 800 }}
				/>
				<Card
					title={mensitem.title}
					titleStyle={{ fontSize: 36, fontWeight: "bold" }}
					wrapperStyle={{ alignItems: "center" }}>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "bold",
							marginBottom: 10
						}}>
						{mensitem.price}
					</Text>
					<ButtonGroup
						buttons={mensitem.buttons}
						textStyle={{
							fontWeight: "bold",
							fontSize: 18,
							marginBottom: 10
						}}
					/>
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

class MensInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static navigationOptions = {
		title: "Shop Mens Collection"
	};

	render() {
		const mensId = this.props.navigation.getParam("mensId");
		const mensitem = this.props.menscollection.menscollection.filter(
			(mensitem) => mensitem.id === mensId
		)[0];

		return <RenderItem mensitem={mensitem} />;
	}
}

export default connect(mapStateToProps)(MensInfo);
