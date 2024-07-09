import { StyleSheet, Platform } from "react-native";

import SAD from "../../SAD";
import { scaleFactor } from "../../utils/ViewScaleUtil";
import CommonStyle from "../../commonStyle/CommonStyle";
import { Dimensions } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bgGradient: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
  topLogo: {
    marginTop: Platform.OS === "ios" ? 50 : 30,
  },
  headingText: {
    fontSize: 24,
    fontFamily: "Rubik-Medium",
    alignSelf: "center",
    marginTop: 32,
    color: SAD.colors.black,
  },
  subHeadingText: {
    width: 230,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
    color: SAD.colors.grey8A8A8A,
  },
  termsTextContainer: {
    marginTop: 25,
  },
  termsText: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
    textAlign: "center",
  },
});
