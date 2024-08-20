import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import SpendingList from "@/data/spending.json";
import {
  AmazonIcon,
  ShoopingCartIcon,
  AirbnbIcon,
  FigmaIcon,
  SpotifyIcon,
  NetflixIcon,
} from "@/constants/Icons";

const SpendingBlock = () => {
  const Icons: Record<string, any> = {
    "AirBnB Rent": <AirbnbIcon width={22} height={22} color={Colors.white} />,
    Netflix: <NetflixIcon width={22} height={22} color={Colors.white} />,
    Spotify: <SpotifyIcon width={22} height={22} color={Colors.white} />,
    Amazon: <AmazonIcon width={22} height={22} color={Colors.white} />,
    Figma: <FigmaIcon width={22} height={22} color={Colors.white} />,
    "Online Shopping": (
      <ShoopingCartIcon width={22} height={22} color={Colors.white} />
    ),
  };

  return (
    <View style={{ marginVertical: 20, alignItems: "flex-start" }}>
      <Text style={{ color: Colors.white, fontSize: 16, marginBottom: 20 }}>
        July <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>

      {SpendingList.map((item, index) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            gap: 10,
          }}
          key={index}
        >
          <View
            style={{
              backgroundColor: Colors.grey,
              padding: 15,
              borderRadius: 50,
            }}
          >
            {Icons[item.name]}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View style={{ gap: 5 }}>
              <Text
                style={{ color: Colors.white, fontWeight: "600", fontSize: 16 }}
              >
                {item.name}
              </Text>
              <Text style={{ color: Colors.white }}>{item.date}</Text>
            </View>
            <Text
              style={{ color: Colors.white, fontWeight: "600", fontSize: 16 }}
            >
              ${item.amount}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({});
