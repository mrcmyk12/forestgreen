import React from "react";
import { Text, View } from "react-native";
import { Card, Image } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";

function RenderMen({ menscollection }) {
	if (menscollection) {
		return (
			<Card
				featuredTitle={menscollection.title}
				image={{ uri: baseUrl + menscollection.image }}>
				<Text>{menscollection.price}</Text>
				<Text>{menscollection.subtitle}</Text>
			</Card>
		);
	}
	return <View />;
}

function MensInfo(props) {
	return <RenderMen menscollection={props.menscollection} />;
}

export default MensInfo;
