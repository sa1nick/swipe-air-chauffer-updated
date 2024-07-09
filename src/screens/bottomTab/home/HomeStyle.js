import { StyleSheet, Platform } from "react-native";

import SAD from "../../../SAD";
import CommonStyle from "../../../commonStyle/CommonStyle";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBg: {
    width: "100%",
    height: 200,
    position: "absolute",
  },
  bottomContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: SAD.colors.white,
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: "Rubik-Medium",
    color: SAD.colors.black,
  },

  startEarningButton: {
    height: 57,
    width: 157,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: SAD.colors.green,
    borderRadius: 10,
  },

  startEarningTextBox: {
    fontFamily: "Rubik-Regular",
    fontSize: 12,
    color: SAD.colors.white,
  },

  startEarningText: {
    fontFamily: "Rubik-Regular",
    fontSize: 12,
    color: SAD.colors.white,
  },

  reviewHeading: {
    fontSize: 20,
    fontFamily: "Rubik-Medium",
    color: SAD.colors.black,
  },
});
