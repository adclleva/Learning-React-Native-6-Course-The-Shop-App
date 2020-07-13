import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = (props) => {
  // it retrieves the state as input and returns whatever we want to get from there
  // we'll be pulling from the state of the products reducer
  const products = useSelector((state) => state.products.availableProducts);
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
            onViewDetail={() => console.log(`View ${item.title} Details`)}
            onAddToCart={() => console.log(`Added ${item.title} to cart`)}
          />
        );
      }}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
