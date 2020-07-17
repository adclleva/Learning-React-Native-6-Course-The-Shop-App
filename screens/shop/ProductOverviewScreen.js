import React from "react";
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Item, HeaderButtons } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart"; // to get the action creators from Redux
import HeaderButton from "../../components/UI/HeaderButton";

const ProductOverviewScreen = (props) => {
  // it retrieves the state as input and returns whatever we want to get from there
  // we'll be pulling from the state of the products reducer
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  return (
    <FlatList
      data={products} // this is the array that we'll be using
      keyExtractor={(item) => item.id} // this is for older versions of React
      renderItem={(itemData) => {
        const { item } = itemData;
        // itemData === { item, index, separators }, it gives you these props

        return (
          <ProductItem
            image={item.imageUrl}
            title={item.title}
            price={item.price}
            onViewDetail={() =>
              props.navigation.navigate("ProductDetail", {
                productId: item.id,
                productTitle: item.title, // we'll pass down the title for the navigation header
              })
            }
            onAddToCart={() => {
              dispatch(cartActions.addToCart(item)); // the item is the specific Product class
            }}
          />
        );
      }}
    />
  );
};

// we switch over to a function because we're going to return and use the data that is being passed down
// with the navigationOptions to navigate to the CartScreen
ProductOverviewScreen.navigationOptions = (navData) => {
  console.log("navData", navData);
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          // this will render a specific icon depending on the platform
          // we can go here to check out the icons https://icons.expo.fyi/
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
