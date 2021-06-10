import React, { Component } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { Card, Image, ButtonGroup, Button } from "react-native-elements";
import { postWomensCart } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		womenscollection: state.womenscollection,
		womenscart: state.womenscart
	};
};

const mapDispatchtoProps = {
	postWomensCart: (womensId) => postWomensCart(womensId)
};

function RenderItem(props) {
	const { womensitem } = props;

	if (womensitem) {
		return (
			<ScrollView>
				<Image
					source={{ uri: baseUrl + womensitem.image }}
					style={{ height: 800 }}
				/>
				<Card
					title={womensitem.title}
					titleStyle={{ fontSize: 36, fontWeight: "bold" }}
					wrapperStyle={{ alignItems: "center" }}>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "bold",
							marginBottom: 10
						}}>
						{womensitem.price}
					</Text>

					<Button
						title="Add to Cart"
						titleStyle={{ fontWeight: "bold" }}
						buttonStyle={{ backgroundColor: "black" }}
						onPress={() => {
							props.addToCart();
							Alert.alert(
								"Item Added to Cart",
								`${womensitem.title} added to cart`,
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

class WomensInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 2
		};
		this.updateIndex = this.updateIndex.bind(this);
	}

	static navigationOptions = {
		title: "Shop Womens Collection"
	};
	updateIndex(selectedIndex) {
		this.setState({ selectedIndex });
	}

	addToCart(womensId) {
		this.props.postWomensCart(womensId);
	}

	render() {
		const womensId = this.props.navigation.getParam("womensId");
		const womensitem = this.props.womenscollection.womenscollection.filter(
			(womensitem) => womensitem.id === womensId
		)[0];

		const { selectedIndex } = this.state;

		return (
			<ScrollView>
				<RenderItem
					womensitem={womensitem}
					addToCart={() => this.addToCart(womensId)}
				/>
				<ButtonGroup
					onPress={this.updateIndex}
					selectedIndex={selectedIndex}
					buttons={womensitem.buttons}
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

export default connect(mapStateToProps, mapDispatchtoProps)(WomensInfo);
