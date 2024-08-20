import { StyleSheet, View, Platform, ScrollView } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import Expenses from "@/components/Expenses";
import ExpenseBlock from "@/components/ExpenseBlock";
import IncomeBlock from "@/components/IncomeBlock";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Expenses />
          <ExpenseBlock />
          <IncomeBlock />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 40 : 70,
  },
});
