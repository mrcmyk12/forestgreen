import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card, Image, ButtonGroup, Button } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		womenscollection: state.womenscollection
	};
};

function RenderItem({ womensitem }) {
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
					<ButtonGroup
						buttons={womensitem.buttons}
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

class WomensInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static navigationOptions = {
		title: "Shop Womens Collection"
	};

	render() {
		const womensId = this.props.navigation.getParam("womensId");
		const womensitem = this.props.womenscollection.womenscollection.filter(
			(womensitem) => womensitem.id === womensId
		)[0];

		return <RenderItem womensitem={womensitem} />;
	}
}

export default connect(mapStateToProps)(WomensInfo);
