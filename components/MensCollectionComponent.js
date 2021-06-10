import React, { Component } from "react";
import { Card, Image, Button, Text, ListItem } from "react-native-elements";
import { FlatList, Modal } from "react-native";
import { MENSCOLLECTION } from "../shared/menscollection";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { ScrollView } from "react-native-gesture-handler";

const mapStateToProps = (state) => {
	return {
		menscollection: state.menscollection
	};
};

class MensCollection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};
	}

	static navigationOptions = {
		title: "Mens Collection"
	};

	toggleModal() {
		this.setState({ showModal: !this.state.showModal });
	}

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
						onPress={() => navigate("MensInfo", { mensId: item.id })}
						raised
					/>
				</Card>
			);
		};

		return (
			<FlatList
				data={this.props.menscollection.menscollection}
				renderItem={renderCollection}
				keyExtractor={(item) => item.id.toString()}
			/>
		);
	}
}

export default connect(mapStateToProps)(MensCollection);
