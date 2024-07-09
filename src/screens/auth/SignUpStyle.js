import { StyleSheet, Platform } from "react-native";

import SAD from "../../SAD";
import { scaleFactor } from "../../utils/ViewScaleUtil";
import CommonStyle from "../../commonStyle/CommonStyle";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgGradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  topLogo: {
    marginTop: Platform.OS === "ios" ? 70 : 50,
    width: scaleFactor(387),
    height: 208,
    alignSelf: "center",
  },
  signUpText: {
    fontSize: 24,
    fontFamily: "Rubik-Medium",
    alignSelf: "center",
    marginTop: 32,
    color: SAD.colors.black,
  },
  headingText: {
    width: 230,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
    color: SAD.colors.grey8A8A8A,
  },
  useMobileButton: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginRight: 16,
    height: 30,
    paddingTop: 7,
  },
  useMobileText: {
    ...CommonStyle.text14Regular,
    color: SAD.colors.orange,
  },
  termsButton: {
    marginHorizontal: 16,
    flexDirection: "row",
    height: 20,
    marginTop: 10,
    alignItems: "center",
  },
  uncheckView: {
    width: 13,
    height: 13,
    borderRadius: 3,
    borderColor: SAD.colors.grey909090,
    borderWidth: 0.5,
  },
  termsText: {
    ...CommonStyle.text14Regular,
    color: SAD.colors.grey909090,
    marginLeft: 10,
  },
  separatorContainer: {
    width: 332,
    height: 24,
    marginBottom: 24,
    // marginTop: 40,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    width: 110,
    height: 1,
    backgroundColor: SAD.colors.grey909090,
  },
  orSignUpText: {
    ...CommonStyle.text14Regular,
  },
  socialContainer: {
    width: 150,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  alreadyAccountButton: {
    marginVertical: 28,
    alignSelf: "center",
  },
  alreadyAccountText: {
    ...CommonStyle.text18Regular,
  },
});
