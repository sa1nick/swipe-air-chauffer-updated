import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SAD from "../SAD";
import CommonStyle from "../commonStyle/CommonStyle";
import DetailsCard from "./DetailsCard";

function DriverDetails({ topHeading }) {
  const personalDetails = [
    {
      id: 0,
      subHeading: "Personal Info",
      status: "ok",
    },
    {
      id: 1,
      subHeading: "Personal Documents",
      status: "ok",
    },
    {
      id: 2,
      subHeading: "Emergency Contact",
      status: "failed",
    },
  ];

  const workDetails = [
    {
      id: 0,
      subHeading: "Work Preference",
      status: "pending",
    },
    {
      id: 1,
      subHeading: "Bank Account Details",
      status: "pending",
    },
  ];

  const vehicleDetails = [
    {
      id: 0,
      subHeading: "Vehicle Details",
      status: "ok",
    },
    {
      id: 1,
      subHeading: "SSN",
      status: "ok",
    },
    {
      id: 2,
      subHeading: "Driving License",
      status: "failed",
    },
    {
      id: 3,
      subHeading: "Seller Verification",
      status: "ok",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>{topHeading.toUpperCase()}</Text>
      <DetailsCard
        heading={"Personal Details"}
        subHeadingList={personalDetails}
        icon={SAD.image.multiple_arrow_up}
      />
      <DetailsCard
        heading={"Work Details"}
        subHeadingList={workDetails}
        icon={SAD.image.multiple_arrow_down}
      />
      <DetailsCard
        heading={"Vehicle & ID Card"}
        subHeadingList={vehicleDetails}
        icon={SAD.image.multiple_arrow_down}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30,
    // borderWidth: 1,
    alignItems: "center",
  },

  topHeading: {
    color: SAD.colors.black242424,
    fontSize: 14,
    fontFamily: "Rubik-SemiBold",
  },
});

export default DriverDetails;
