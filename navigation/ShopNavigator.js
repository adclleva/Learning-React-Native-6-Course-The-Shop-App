import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverViewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    // these are keys for the navigation identifiers
    ProductsOverView: ProductsOverViewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen, // this is included in the stack to navigate from the header cart icon
  },
  {
    // the second argument is what configures the stack navigator
    defaultNavigationOptions: {
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
    },
  }
);

export default createAppContainer(ProductsNavigator); // we need to make sure to wrap our the navigation that we'll be using
