import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { baseUrl } from "../shared/baseUrl";

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static navigationOptions = {
		title: "Welcome"
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<ImageBackground
				source={require("../assets/pexels-luis-dalvan-1770809.jpg")}
				style={{ height: "100%", width: "100%" }}>
				<View
					style={{
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "80%"
					}}>
					<View style={{ marginBottom: 20 }}>
						<Text
							style={{
								color: "white",
								fontSize: 50,
								fontWeight: "bold",
								textAlign: "center"
							}}>
							Forest Green
						</Text>
					</View>
					<Button
						raised
						title="Enter"
						titleStyle={{ fontSize: 20, fontWeight: "bold" }}
						type="solid"
						buttonStyle={{ backgroundColor: "black", width: 200 }}
						onPress={() => navigate("Home")}
					/>
				</View>
			</ImageBackground>
		);
	}
}

export default Welcome;
