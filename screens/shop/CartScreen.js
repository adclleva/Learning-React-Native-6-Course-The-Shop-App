import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = useSelector((state) => {
    // we transform it because the state is an object and we want an array for the FlatList
    const transformedCartItems = [];

    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].title,
        productPrice: state.cart.items[key].price,
        productQuantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0} // this checks if the cart is empty
        />
      </View>
      <View>
        <Text>Cart Items</Text>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,

    // shadow is for IOS
    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    // elevation is for android
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});
