import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

import SAD from "../SAD";
import SADGradientButton from "../components/SADGradientButton";
import LinearGradient from "react-native-linear-gradient";
import { Dimensions } from "react-native";

const BannerCell = (props) => {
  return (
    <View style={styles.cellContainer}>
      <LinearGradient
        // colors={["#FBBC91", "#FF6D09"]}
        colors={["#FF6D09", "#FBBC91"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.1, y: 0.1 }}
        // locations={[0.1, 0.6]}
        style={styles.bgGradient}
      ></LinearGradient>
      <View style={styles.topContainer}>
        <Image style={styles.imageTutorial} source={props.item.tutorialImage} />
      </View>
      <View style={styles.sideContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>{props.item.heading}</Text>
          <Text style={styles.subHeadingText}>{props.item.subHeading}</Text>
        </View>
        <SADGradientButton
          style={{ marginTop: 18 }}
          buttonTitle={"Start Earning"}
          fontSize={10}
          width={102}
          height={30}
          image={SAD.image.multiple_forward_arrow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    width: 390,
    height: 140,
    position: "absolute",
    borderRadius: 12,
    elevation: 2,
    // borderWidth: 1,
  },

  cellContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    // gap: 13,
    margin: 16,
    width: 390,
    // height: 140,
    paddingHorizontal: 12,
    paddingTop: 7,
    paddingBottom: 16,
    height: 140,
  },
  topContainer: {
    // borderWidth: 1,
  },
  imageTutorial: {
    // flex: 1,
    width: 140,
    height: 116,
    resizeMode: "contain",
    marginTop: 7,
  },
  sideContainer: {
    // borderWidth: 1,
    height: 130,
    width: 234,
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },

  textContainer: {
    height: 76,
  },

  headingText: {
    color: SAD.colors.white,
    fontSize: 18,
    fontFamily: "Rubik-Medium",
  },
  subHeadingText: {
    color: SAD.colors.white,
    fontSize: 14,
    fontFamily: "Rubik-Regular",
  },
});

export default BannerCell;
