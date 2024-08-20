import { View, Text } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PieChartComponent from "./PieChartComponent";

const Expenses = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ gap: 10 }}>
        <Text style={{ color: Colors.white, fontSize: 16 }}>
          My <Text style={{ fontWeight: 700 }}>Expenses</Text>
        </Text>
        <Text style={{ color: Colors.white, fontWeight: 700, fontSize: 36 }}>
          $1,475.
          <Text style={{ fontWeight: 400, fontSize: 22 }}>00</Text>
        </Text>
      </View>
      <View style={{ paddingVertical: 20, alignItems: "center" }}>
        <PieChartComponent />
      </View>
    </View>
  );
};

export default Expenses;
