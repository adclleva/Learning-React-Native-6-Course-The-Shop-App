import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer"; // this will be for the SideDrawer
import { Platform } from "react-native";

import ProductsOverViewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";

import Colors from "../constants/Colors";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary, // colors of the title
};

const ProductsNavigator = createStackNavigator(
  {
    // these are keys for the navigation identifiers
    ProductsOverView: ProductsOverViewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen, // this is included in the stack to navigate from the header cart icon
  },
  {
    // the second argument is what configures the stack navigator
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator); // we need to make sure to wrap our the navigation that we'll be using
