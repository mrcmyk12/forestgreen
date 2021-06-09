import React, { Component } from "react";
import { FlatList, View, Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		menscollection: state.menscollection,
		womenscollection: state.womenscollection,
		dailyessentials: state.dailyessentials,
		menscart: state.menscart,
		womenscart: state.womenscart,
		dailyessentialscart: state.dailyessentialscart
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

		const renderWomensCartItem = ({ item }) => {
			return (
				<ListItem
					title={item.title}
					leftAvatar={{ source: { uri: baseUrl + item.image } }}
					rightElement={item.price}
				/>
			);
		};

		return (
			<View>
				<FlatList
					data={this.props.menscollection.menscollection.filter(
						(mensitem) => this.props.menscart.includes(mensitem.id)
					)}
					renderItem={renderCartItem}
					keyExtractor={(item) => item.id.toString()}
				/>
				<FlatList
					data={this.props.womenscollection.womenscollection.filter(
						(womensitem) => this.props.womenscart.includes(womensitem.id)
					)}
					renderItem={renderWomensCartItem}
					keyExtractor={(item) => item.id.toString()}
				/>
				<FlatList
					data={this.props.dailyessentials.dailyessentials.filter(
						(essentialsItem) =>
							this.props.dailyessentialscart.includes(essentialsItem.id)
					)}
					renderItem={renderCartItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	}
}

export default connect(mapStateToProps)(Cart);
