import { StyleSheet, Platform } from "react-native";

import SAD from "../../SAD";
import CommonStyle from "../../commonStyle/CommonStyle";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationStyle: {
    height: 40,
    flexDirection: "row",
  },
  backButton: {
    width: 30,
    height: "100%",
    marginLeft: 16,
  },
  title: {
    ...CommonStyle.text16Regular,
    marginLeft: 10,
  },
  progessContainer: {
    marginHorizontal: 16,
    height: 35,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subProgessContainer: {
    width: "32%",
    height: "100%",
    justifyContent: "space-between",
  },
  subProgressTitle: {
    ...CommonStyle.text16Regular,
    fontSize: 9,
    marginLeft: 5,
  },
  progress: {
    width: "100%",
    height: 10,
    backgroundColor: SAD.colors.purple,
  },
  profileButton: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 40,
  },
  driverImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  commonContainer: {
    width: "100%",
    height: 78,
    marginTop: 20,
    justifyContent: "space-between",
  },
  dobSubContainer: {
    height: 50,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commonSubContainer: {
    ...Platform.select({
      ios: {
        shadowColor: SAD.colors.grey7E7E7E,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
    height: 50,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 10,
    backgroundColor: SAD.colors.white,
    gap: 10,
  },
  commonTitleInputField: {
    ...CommonStyle.text16Regular,
    marginLeft: 16,
  },
  dobButton: {
    ...Platform.select({
      ios: {
        shadowColor: SAD.colors.grey7E7E7E,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
    height: "100%",
    width: "70%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: SAD.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dobPlaceholder: {
    ...CommonStyle.text14Regular,
    color: SAD.colors.grey8A8A8A,
  },
  dob: {
    ...CommonStyle.text14Regular,
    color: SAD.colors.black,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: SAD.colors.purple,
  },
});
