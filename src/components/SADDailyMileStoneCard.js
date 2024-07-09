import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet, Platform } from "react-native";
import SAD from "../SAD";

function CoinStack({ steps }) {
  return (
    <View style={styles.coinsStack}>
      <Text style={styles.pointsBold}>{steps}</Text>
      <Image source={SAD.image.coins_stack} />
    </View>
  );
}

function PointStatus({ points, pointsType }) {
  return (
    <View style={styles.pointStatus}>
      <Text style={{ color: SAD.colors.black }}>
        <Text style={styles.pointsBold}>
          {points} {""}
        </Text>
        more rides to earn <Text style={styles.pointsBold}>{pointsType}</Text>
      </Text>
    </View>
  );
}

function SADDailyMileStoneCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daily Milestone</Text>
      <View style={styles.mileStoneProgress}>
        <Image
          source={SAD.image.coin_progressbar}
          style={{ width: "100%", height: 20, marginTop: 20, marginBottom: 10 }}
        />
        <View style={styles.coinsRow}>
          <CoinStack steps={5} />
          <CoinStack steps={10} />
          <CoinStack steps={15} />
          <CoinStack steps={25} />
          <CoinStack steps={50} />
        </View>
      </View>

      <View style={styles.divider}></View>
      <View style={styles.status}>
        <PointStatus points={4} pointsType={50} />
        <PointStatus points={23} pointsType={"Gold"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 382,
    height: 170,
    backgroundColor: SAD.colors.papayaWhip,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 17,
    borderWidth: 0.22,
    borderBlockColor: SAD.colors.orange,
    borderRadius: 10,
    borderColor: SAD.colors.orange,
  },
  heading: {
    color: SAD.colors.purple,
    fontFamily: "Rubik-Medium",
    fontSize: 16,
  },
  mileStoneProgress: {},
  coinsRow: { flexDirection: "row", justifyContent: "space-between" },
  coinsStack: {
    flexDirection: "row",
    gap: 2.3,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: SAD.colors.divider,
    marginTop: 15,
  },
  status: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    gap: 43,
    // borderWidth: 1,
  },

  pointsBold: {
    color: SAD.colors.black,
    fontFamily: "Rubik-Bold",
    fontSize: 12,
  },
});

export default SADDailyMileStoneCard;
