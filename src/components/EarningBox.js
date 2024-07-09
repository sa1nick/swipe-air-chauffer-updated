import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SAD from "../SAD";

function EarningBox({ heading, amount, icon }) {
  return (
    <View style={styles.orderContainer}>
      <Image source={icon} />
      <Text
        style={{
          fontFamily: "Rubik-Regular",
          fontSize: 14,
          color: SAD.colors.white,
        }}
      >
        {heading}
      </Text>
      <Text
        style={{
          fontFamily: "Rubik-Medium",
          fontSize: 14,
          color: SAD.colors.white,
        }}
      >
        {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
});

export default EarningBox;
