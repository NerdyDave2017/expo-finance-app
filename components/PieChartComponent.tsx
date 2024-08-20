import { PieChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";
import Colors from "@/constants/Colors";

const PieChartComponent = () => {
  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];
  return (
    <PieChart
      data={pieData}
      donut
      showGradient
      sectionAutoFocus
      // focusOnPress
      semiCircle
      radius={70}
      innerRadius={55}
      innerCircleColor={Colors.black}
      centerLabelComponent={() => {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
              47%
            </Text>
          </View>
        );
      }}
    />
  );
};

export default PieChartComponent;
