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
import Colors from "../../constants/Colors";

const ProductDetailScreen = (props) => {
  const { navigation } = props;
  const productId = navigation.getParam("productId"); // this will extract from the navigation props

  // this will get the slice of state which in this case is products from the productsReducer
  const selectedProduct = useSelector((state) =>
    // this will get the product that we want
    state.products.availableProducts.find((product) => product.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => console.log(`Added ${selectedProduct.title} to cart`)}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
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

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});
