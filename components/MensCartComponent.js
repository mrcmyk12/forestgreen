import React, { Component } from "react";
import { FlatList, View, Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		menscollection: state.menscollection,
		menscart: state.menscart
	};
};

class MensCart extends Component {
	render() {
		const { navigate } = this.props.navigation;

		const renderCartItem = ({ item }) => {
			return (
				<ListItem
					title={item.title}
					leftAvatar={{ source: { uri: baseUrl + item.image } }}
					rightElement={item.price}
				/>
			);
		};

		return (
			<FlatList
				data={this.props.menscollection.menscollection.filter((mensitem) =>
					this.props.menscart.includes(mensitem.id)
				)}
				renderItem={renderCartItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		);
	}
}

export default connect(mapStateToProps)(MensCart);
