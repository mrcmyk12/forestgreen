import React, { Component } from "react";
import { FlatList, View, Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		menscollection: state.menscollection,
		womenscollection: state.womenscollection,
		dailyessentials: state.dailyessentials
	};
};

class Cart extends Component {
	static navigationOptions = {
		title: "Cart"
	};

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
			<ScrollView>
				<FlatList
					data={this.props.menscollection.menscollection.filter(
						(mensitem) => this.props.menscart.includes(mensitem.id)
					)}
					renderItem={renderCartItem}
					keyExtractor={(item) => item.id.toString()}
				/>
				<FlatList
					data={this.props.womenscollection.womenscollection.filter(
						(womensItem) => this.props.womenscart.includes(womensItem.id)
					)}
					renderItem={renderCartItem}
					keyExtractor={(item) => item.id.toString()}
				/>
				<FlatList
					data={this.props.dailyessentialscollection.dailyessentialscollection.filter(
						(essentialsItem) =>
							this.props.dailyessentialscart.includes(essentialsItem.id)
					)}
					renderItem={renderCartItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</ScrollView>
		);
	}
}

export default connect(mapStateToProps)(Cart);
