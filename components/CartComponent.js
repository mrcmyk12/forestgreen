import React, { Component } from "react";
import { SwipeRow } from "react-native-swipe-list-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList, View, Text, ScrollView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import {
	deleteDailyEssentialsCart,
	deleteMensCart,
	deleteWomensCart
} from "../redux/ActionCreators";

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

const mapDispatchtoProps = {
	deleteMensCart: (mensId) => deleteMensCart(mensId),
	deleteWomensCart: (womensId) => deleteWomensCart(womensId),
	deleteDailyEssentialsCart: (essentialsId) =>
		deleteDailyEssentialsCart(essentialsId)
};

class Cart extends Component {
	static navigationOptions = {
		title: "Cart"
	};

	render() {
		const { navigate } = this.props.navigation;

		const renderMensCartItem = ({ item }) => {
			return (
				<SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
					<View style={styles.deleteView}>
						<TouchableOpacity
							style={styles.deleteTouchable}
							onPress={() => this.props.deleteMensCart(item.id)}>
							<Text style={styles.deleteText}>Delete</Text>
						</TouchableOpacity>
					</View>
					<View>
						<ListItem
							title={item.title}
							leftAvatar={{ source: { uri: baseUrl + item.image } }}
							rightElement={item.price}
						/>
					</View>
				</SwipeRow>
			);
		};

		const renderWomensCartItem = ({ item }) => {
			return (
				<SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
					<View style={styles.deleteView}>
						<TouchableOpacity
							style={styles.deleteTouchable}
							onPress={() => this.props.deleteWomensCart(item.id)}>
							<Text style={styles.deleteText}>Delete</Text>
						</TouchableOpacity>
					</View>
					<View>
						<ListItem
							title={item.title}
							leftAvatar={{ source: { uri: baseUrl + item.image } }}
							rightElement={item.price}
						/>
					</View>
				</SwipeRow>
			);
		};

		const renderDailyEssentialsCartItem = ({ item }) => {
			return (
				<SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
					<View style={styles.deleteView}>
						<TouchableOpacity
							style={styles.deleteTouchable}
							onPress={() =>
								this.props.deleteDailyEssentialsCart(item.id)
							}>
							<Text style={styles.deleteText}>Delete</Text>
						</TouchableOpacity>
					</View>
					<View>
						<ListItem
							title={item.title}
							leftAvatar={{ source: { uri: baseUrl + item.image } }}
							rightElement={item.price}
						/>
					</View>
				</SwipeRow>
			);
		};

		return (
			<View>
				<FlatList
					data={this.props.menscollection.menscollection.filter(
						(mensitem) => this.props.menscart.includes(mensitem.id)
					)}
					renderItem={renderMensCartItem}
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
					renderItem={renderDailyEssentialsCartItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	deleteView: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		flex: 1
	},
	deleteTouchable: {
		backgroundColor: "red",
		height: "100%",
		justifyContent: "center"
	},

	deleteText: {
		color: "white",
		fontWeight: "700",
		textAlign: "center",
		fontSize: 16,
		width: 100
	}
});

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);
