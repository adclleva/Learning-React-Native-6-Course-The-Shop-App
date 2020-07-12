import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverViewScreen from "../screens/shop/ProductOverviewScreen";

import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverView: ProductsOverViewScreen,
  },
  {
    // the second argument is what configures the stack navigator
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary, // colors of the title
    },
  }
);

export default createAppContainer(ProductsNavigator); // we need to make sure to wrap our the navigation that we'll be using
