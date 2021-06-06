import React, { Component } from "react";
import {
	Card,
	Image,
	Button,
	Text,
	ListItem,
	Tile
} from "react-native-elements";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	return {
		blog: state.blog
	};
};

class Blog extends Component {
	static navigationOptions = {
		title: "Blog"
	};

	render() {
		const { navigate } = this.props.navigation;

		const renderCollection = ({ item }) => {
			return (
				<View>
					<Tile
						title={item.date}
						caption={item.title}
						featured
						imageSrc={{ uri: baseUrl + item.image }}
					/>
					<Text>{item.content}</Text>
				</View>
			);
		};

		return (
			<FlatList
				data={this.props.blog.blog}
				renderItem={renderCollection}
				keyExtractor={(item) => item.id.toString()}
			/>
		);
	}
}

export default connect(mapStateToProps)(Blog);
