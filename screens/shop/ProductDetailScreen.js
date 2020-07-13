import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View,
  ScrollView,
} from "react-native";

import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  const { navigation } = props;
  const productId = navigation.getParam("productId"); // this will extract from the navigation props

  // this will get the slice of state which in this case is products from the productsReducer
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navigationData) => {
  // this is configuration for the title screen
  const productTitle = navigationData.navigation.getParam("productTitle");

  return {
    headerTitle: productTitle,
  };
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
