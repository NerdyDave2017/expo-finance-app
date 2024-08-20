import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import ExpenseList from "@/data/expenses.json";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

const ExpenseBlock = () => {
  const staticItem = [{ name: "Add Item" }];

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={staticItem.concat(ExpenseList)}
        renderItem={RenderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const RenderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {
  if (index == 0) {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.addItemBtn}>
          <Feather name={"plus"} size={22} color={"#ccc"} />
        </View>
      </TouchableOpacity>
    );
  }

  let amount = item.amount?.split(".");
  return (
    <View
      style={[
        styles.expenseBlock,
        {
          backgroundColor:
            item.name == "Food"
              ? Colors.blue
              : item.name == "Saving"
              ? Colors.white
              : Colors.tintColor,
        },
      ]}
    >
      <Text
        style={[
          styles.expenseBlockTxt1,
          {
            color:
              item.name == "Food"
                ? Colors.black
                : item.name == "Saving"
                ? Colors.black
                : Colors.white,
          },
        ]}
      >
        {item.name}
      </Text>
      <Text
        style={[
          styles.expenseBlockTxt2,
          {
            color:
              item.name == "Food"
                ? Colors.black
                : item.name == "Saving"
                ? Colors.black
                : Colors.white,
          },
        ]}
      >
        ${amount![0]}.
        <Text
          style={[
            styles.expenseBlockTxt2Span,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {amount![1]}
        </Text>
      </Text>
      <View style={styles.expenseBlock3View}>
        <Text
          style={[
            styles.expenseBlockTxt1,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.percentage}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  expenseBlockTxt1: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockTxt2Span: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "400",
  },
  expenseBlock3View: {
    backgroundColor: "rgba(225, 225, 225, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
