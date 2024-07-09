import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import SAD from "../SAD";
import LinearGradient from "react-native-linear-gradient";

function DetailsCard({ heading, subHeadingList, icon }) {
  const statusCircle = (status) => {
    switch (status) {
      case "ok":
        return SAD.image.checkCircleGreen;
      case "pending":
        return SAD.image.checkCircleGrey;
      case "failed":
        return SAD.image.checkCircleRed;
      default:
        return SAD.image.checkCircleGrey;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.subHeadingContainer}>
      <Image source={statusCircle(item.status)} style={styles.statusCircle} />
      <Text
        style={
          item.status === "failed"
            ? styles.subHeadingUpdateText
            : styles.subHeadingText
        }
      >
        {item.subHeading}
        {item.status === "failed" && (
          <View style={styles.infoContainer}>
            <Image
              source={SAD.image.infoCircle}
              style={styles.superscriptImage}
            />
          </View>
        )}
      </Text>
      {item.status === "failed" && (
        <Pressable style={styles.updateButton}>
          <Text style={styles.updateBtnText}>UPDATE</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <LinearGradient
      colors={["#FFB785", "#FFE1CD"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.bgGradient}
    >
      <View style={styles.cellContainer}>
        <View style={styles.topContainer}>
          <View style={styles.detailsSection}>
            <Text style={styles.headingText}>{heading}</Text>
            {icon ? <Image source={icon} /> : null}
          </View>
          <FlatList
            data={subHeadingList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bgGradient: {
    width: 390,
    borderRadius: 12,
    // borderWidth: 1,
    marginTop: 10,
  },

  cellContainer: {
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  topContainer: {
    // borderWidth: 1,
  },

  detailsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },

  imageTutorial: {
    // flex: 1,
    width: 140,
    height: 116,
    resizeMode: "contain",
  },
  sideContainer: {
    // borderWidth: 1,
    width: 234,
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  headingText: {
    color: SAD.colors.purple,
    fontSize: 16,
    fontFamily: "Rubik-Medium",
  },

  subHeadingContainer: {
    flexDirection: "row",
    gap: 7,
    // borderWidth: 1,
    paddingVertical: 3,
  },

  statusCircle: {
    height: 12,
    width: 12,
    marginTop: 5,
  },

  subHeadingText: {
    color: SAD.colors.grey909090,
    fontSize: 14,
    fontFamily: "Rubik-Regular",
    // borderWidth: 1,
  },

  subHeadingUpdateText: {
    color: SAD.colors.black,
    fontSize: 14,
    fontFamily: "Rubik-Medium",
    // borderWidth: 1,
  },
  infoContainer: {
    position: "absolute",
    // left: 80,
    // top: -80, // Adjust this value to position the image higher or lower
    width: 15,
    height: 15,
    elevation: 5,
    // borderWidth: 1,
  },
  infoImage: {
    width: "100%", // Adjust the width and height as needed
    height: "100%",
  },
  updateButton: {
    backgroundColor: SAD.colors.orange,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  updateBtnText: {
    color: SAD.colors.white,
    fontFamily: "Rubik-Medium",
    fontSize: 8,
    // paddingVertical: 2,
    // borderWidth: 1,
    textAlign: "center",
  },
});

export default DetailsCard;
