import React, { Component } from "react";
import Home from "./HomeComponent";
import Collection from "./CollectionComponent";
import MensCollection from "./MensCollectionComponent";
import MensInfo from "./MensInfoComponent";
import WomensCollection from "./WomensCollectionComponent";
import WomensInfo from "./WomensInfoComponent";
import Blog from "./BlogComponent";
import Cart from "./CartComponent";
import { View, Platform, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { COLLECTIONS } from "../shared/collections";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import DailyEssentials from "./DailyEssentialComponent";
import DailyEssentialsInfo from "./DailyEssentialsInfoComponent";
import { connect } from "react-redux";
import {
	fetchDailyEssentials,
	fetchMensCollection,
	fetchWomensCollection,
	fetchBlog
} from "../redux/ActionCreators";

const mapDispatchToProps = {
	fetchWomensCollection,
	fetchMensCollection,
	fetchDailyEssentials,
	fetchBlog
};

const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		Collection: { screen: Collection },
		MensCollection: { screen: MensCollection },
		MensInfo: { screen: MensInfo },
		WomensCollection: { screen: WomensCollection },
		WomensInfo: { screen: WomensInfo },
		DailyEssentials: { screen: DailyEssentials },
		DailyEssentialsInfo: { screen: DailyEssentialsInfo }
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000000"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			}
		}
	}
);

const CartNavigator = createStackNavigator(
	{
		Cart: { screen: Cart }
	},
	{
		initialRouteName: "Cart",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000000"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			}
		}
	}
);

const CollectionNavigator = createStackNavigator(
	{
		Collection: { screen: Collection },
		MensCollection: { screen: MensCollection },
		MensInfo: { screen: MensInfo },
		WomensCollection: { screen: WomensCollection },
		WomensInfo: { screen: WomensInfo },
		Home: { screen: Home }
	},
	{
		initialRouteName: "Collection",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000000"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			}
		}
	}
);

const DailyEssentialsNavigator = createStackNavigator(
	{
		DailyEssentials: { screen: DailyEssentials },
		DailyEssentialsInfo: { screen: DailyEssentialsInfo }
	},
	{
		initialRouteName: "Collection",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000000"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			}
		}
	}
);

const MensCollectionNavigator = createStackNavigator(
	{
		MensCollection: { screen: MensCollection }
	},
	{
		initialRouteName: "Men's Collection",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000000"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			}
		}
	}
);

const WomensCollectionNavigator = createStackNavigator(
	{
		WomensCollection: { screen: WomensCollection }
	},
	{
		initialRouteName: "Womens Collection",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000000"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			}
		}
	}
);

const MainNavigator = createDrawerNavigator(
	{
		Home: { screen: HomeNavigator },
		Collection: { screen: CollectionNavigator },
		MensCollection: { screen: MensCollection },
		WomensCollection: { screen: WomensCollection },
		DailyEssentials: { screen: DailyEssentials },
		Blog: { screen: Blog },
		Cart: { screen: CartNavigator }
	},
	{
		drawerBackgroundColor: "#fff"
	}
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
	componentDidMount() {
		this.props.fetchDailyEssentials();
		this.props.fetchMensCollection();
		this.props.fetchWomensCollection();
		this.props.fetchBlog();
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop:
						Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
				}}>
				<AppNavigator />
			</View>
		);
	}
}

export default connect(null, mapDispatchToProps)(Main);
