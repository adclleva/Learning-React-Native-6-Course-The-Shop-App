import React from "react";
import { Text, View, StyleSheet } from "react-native";

// the boiler plate to connect the redux to the app
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./store/reducers/product";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>Test</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
