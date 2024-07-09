import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import SAD from "../SAD";

const SADContinueButton = (props) => {
  return (
    <Pressable onPress={props.buttonPressed} style={styles.button}>
      <Text style={styles.buttonText}>{props.buttonTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 177,
    height: 40,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: SAD.colors.orange,
    marginVertical: 70,
  },
  buttonText: {
    color: SAD.colors.white,
    fontSize: 15,
    fontFamily: "Rubik-Medium",
  },
});

export default SADContinueButton;
