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
    marginTop: Platform.OS === "ios" ? 70 : 50,
  },
  headingText: {
    ...CommonStyle.text24Medium,
    color: SAD.colors.black,
    marginTop: 40,
  },
  subHeadingText: {
    ...CommonStyle.text18Regular,
    marginTop: 10,
    marginBottom: 5,
  },
  number: {
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    color: SAD.colors.black,
  },
  otpContainer: {
    marginHorizontal: 16,
    height: 70,
    alignItems: "center",
  },
  pinCodeContainer: {
    width: 50,
    height: 50,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.07,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
    }),
    backgroundColor: SAD.colors.white,
  },
  editSendAgainContainer: {
    width: SAD.constant.screenWidth - 32,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  numberContainer: {
    // width: 300,
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  editPencil: {
    width: 13,
    height: 13,
    marginLeft: 5,
    borderWidth: 1,
    marginBottom: 2,
  },
  didntText: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
  },

  sendAgain: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
    color: SAD.colors.purple,
  },
});
