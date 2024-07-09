import { StyleSheet, Platform } from "react-native";

import SAD from "../../../SAD";
import CommonStyle from "../../../commonStyle/CommonStyle";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 85,
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  purpleGradientBg: {
    width: "100%",
    height: 100,
    position: "absolute",
    // borderWidth: 1,
  },

  orangeGradientBg: {
    width: 72,
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    borderRadius: 22,
    gap: 3,
  },

  userIcon: {
    height: 29,
    width: 28,
    left: -1,
  },
  goldCoinIcon: {
    position: "absolute",
    top: 18,
    left: 18,
  },

  bellNotification: {
    backgroundColor: SAD.colors.orange,
    height: 11,
    width: 11,
    borderRadius: 11 / 2,
    borderWidth: 2,
    borderColor: SAD.colors.purpleLight,
    position: "absolute",
    left: 9,
    top: -3,
  },

  bottomContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: SAD.colors.white,
    // marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  earningContainerBg: {
    width: 382,
    height: 100,
    // borderWidth: 1,
    borderRadius: 10,
    // alignItems: "center",
    justifyContent: "center",
  },
  earningContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 44,
    // borderWidth: 1,
  },

  orderContainer: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
});
