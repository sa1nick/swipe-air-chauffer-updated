import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

import SAD from "../SAD";

const TutorialCell = (props) => {
  return (
    <View style={styles.cellContainer}>
      <View style={styles.topContainer}>
        <Image
          style={styles.imageTutorial}
          source={props.item.tutorialImage}
          resizeMode="center"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headingText}>{props.item.heading}</Text>
        <Text style={styles.subHeadingText}>{props.item.subHeading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
  },
  topContainer: {
    height: "60%",
    justifyContent: "flex-end",
  },
  imageTutorial: {
    width: SAD.constant.screenWidth,
    height: 350,
  },
  bottomContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    color: SAD.colors.black,
    fontSize: 20,
    fontFamily: "Rubik-Medium",
  },
  subHeadingText: {
    color: SAD.colors.grey8A8A8A,
    fontSize: 14,
    fontFamily: "Rubik-Regular",
    width: SAD.constant.screenWidth - 30,
    textAlign: "center",
    marginTop: 10,
  },
});

export default TutorialCell;
