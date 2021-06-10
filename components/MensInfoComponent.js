import React, { Component } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { Card, Image, ButtonGroup, Button } from "react-native-elements";
import { connect } from "react-redux";
import { postMensCart } from "../redux/ActionCreators";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		menscollection: state.menscollection,
		menscart: state.menscart
	};
};

const mapDispatchtoProps = {
	postMensCart: (mensId) => postMensCart(mensId)
};

function RenderItem(props) {
	const { mensitem } = props;

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

					<Button
						title="Add to Cart"
						titleStyle={{ fontWeight: "bold" }}
						buttonStyle={{ backgroundColor: "black" }}
						onPress={() => {
							props.addToCart();
							Alert.alert(
								"Item Added to Cart",
								`${mensitem.title} added to cart`,
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

class MensInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 2
		};
		this.updateIndex = this.updateIndex.bind(this);
	}

	updateIndex(selectedIndex) {
		this.setState({ selectedIndex });
	}

	static navigationOptions = {
		title: "Shop Mens Collection"
	};

	addToCart(mensId) {
		this.props.postMensCart(mensId);
	}

	render() {
		const mensId = this.props.navigation.getParam("mensId");
		const mensitem = this.props.menscollection.menscollection.filter(
			(mensitem) => mensitem.id === mensId
		)[0];

		const { selectedIndex } = this.state;

		return (
			<ScrollView>
				<RenderItem
					mensitem={mensitem}
					addToCart={() => this.addToCart(mensId)}
					updateIndex={() => this.updateIndex}
				/>
				<Text style={{ fontSize: 24, fontWeight: "bold" }}>
					Select Size
				</Text>
				<ButtonGroup
					onPress={this.updateIndex}
					selectedIndex={selectedIndex}
					buttons={mensitem.buttons}
					selectedButtonStyle={{ backgroundColor: "black" }}
					textStyle={{
						fontWeight: "bold",
						fontSize: 18,
						marginBottom: 10
					}}
				/>
			</ScrollView>
		);
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(MensInfo);
