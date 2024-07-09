import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";

import SAD from "../SAD";
import SADGradientButton from "./SADGradientButton";
import LinearGradient from "react-native-linear-gradient";
import SADTransParentButton from "./SADTransParentButton";

const subHeadingData = [
  {
    id: 1,
    subHeading: "Double your coins earning",
  },
  {
    id: 0,
    subHeading: "Reduce commission",
  },

  {
    id: 2,
    subHeading: "Get exclusive co-branded vouchers",
  },
];

function SubHeading({ item }) {
  return (
    <View style={styles.subHeadingContainer}>
      <Image source={SAD.image.checkCircleGreen} />
      <Text style={styles.subHeadingText}>{item.subHeading}</Text>
    </View>
  );
}

const renderSubHeading = ({ item, index }) => {
  return <SubHeading item={item} index={index} />;
};

const SwiperAirGoCard = ({ heading, data }) => {
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
        {/* <Image
          style={styles.imageTutorial}
          source={SAD.image.swipe_air_go_illustration}
        /> */}
      </View>
      <View style={styles.sideContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>{heading}</Text>
          <FlatList
            data={subHeadingData}
            renderItem={renderSubHeading}
            key={(item) => item.id}
          />
          <View
            style={{
              marginTop: 7,
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <SADTransParentButton
              buttonTitle={"Know more"}
              icon={SAD.image.multiple_forward_arrow}
              // height={28}
              // width={101}
              fontSize={12}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    width: 390,
    height: 150,
    position: "absolute",
    borderRadius: 12,
    elevation: 5,

    // borderWidth: 1,
  },

  cellContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    // gap: 13,
    // margin: 16,
    width: 390,
    // height: 140,
    // paddingHorizontal: 12,
    paddingTop: 7,
    paddingBottom: 16,
    height: 140,
  },
  topContainer: {
    // borderWidth: 1,
    width: 135,
    height: 125,
    alignItems: "baseline",
    resizeMode: "contain",
  },
  imageTutorial: {
    // borderWidth: 1,
    // flex: 1,
    marginTop: 27,
  },
  sideContainer: {
    // borderWidth: 1,
    height: 130,
    width: 234,
    // paddingHorizontal: 10,
    // alignItems: "flex-start",
  },

  textContainer: {
    // borderWidth: 1,
    height: 76,
  },

  headingText: {
    color: SAD.colors.white,
    fontSize: 18,
    fontFamily: "Rubik-Medium",
  },
  subHeadingContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  subHeadingText: {
    color: SAD.colors.white,
    fontSize: 14,
    fontFamily: "Rubik-Regular",
  },
});

export default SwiperAirGoCard;
