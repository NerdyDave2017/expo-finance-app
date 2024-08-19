import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

const Transactions = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Transactions</Text>
      </View>
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
  },
});
