import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import IncomeList from "@/data/income.json";
import { IncomeType } from "@/types";
import { DollarIcon } from "@/constants/Icons";
import { WalletAddMoneyIcon } from "@/constants/Icons";
import { WalletCardIcon } from "@/constants/Icons";
import { Feather } from "@expo/vector-icons";

const IncomeBlock = () => {
  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 16, marginBottom: 20 }}>
        My <Text style={{ fontWeight: 700 }}>Income</Text>
      </Text>
      <FlatList
        data={IncomeList}
        renderItem={RenderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const RenderItem: ListRenderItem<Partial<IncomeType>> = ({ item, index }) => {
  let amount = item.amount?.split(".");
  return (
    <View
      style={{
        backgroundColor: Colors.grey,
        padding: 20,
        borderRadius: 20,
        marginRight: 15,
        width: 150,
        gap: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderColor: "#666",
            borderWidth: 1,
            borderRadius: 50,
            padding: 5,
            alignSelf: "flex-start",
          }}
        >
          {item.name === "Salary" && (
            <DollarIcon width={22} height={22} color={Colors.white} />
          )}
          {item.name === "Freelancing" && (
            <WalletCardIcon width={22} height={22} color={Colors.white} />
          )}
          {item.name === "Interest" && (
            <WalletAddMoneyIcon width={22} height={22} color={Colors.white} />
          )}
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="more-horizontal" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <Text style={{ color: Colors.white }}>{item.name}</Text>
      <Text style={{ color: Colors.white, fontSize: 18, fontWeight: 600 }}>
        {amount![0]}.
        <Text style={{ fontSize: 14, fontWeight: 400 }}>{amount![1]}</Text>
      </Text>
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({});
