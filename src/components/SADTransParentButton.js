import React from "react";
import { Image, Text, StyleSheet, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SAD from "../SAD";

const SADTransParentButton = ({
  buttonPressed,
  buttonTitle,
  icon,
  height,
  width,
  fontSize,
}) => {
  // Generate styles dynamically based on props
  const styles = createStyles(height, width, fontSize);

  return (
    <Pressable onPress={buttonPressed} style={styles.button}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
      {icon ? <Image style={styles.buttonImage} source={icon} /> : null}
    </Pressable>
  );
};

const createStyles = (width, height, fontSize) =>
  StyleSheet.create({
    button: {
      width: width || 101,
      height: height || 28,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      alignSelf: "center",
      flexDirection: "row",
      borderWidth: 1,
      borderColor: SAD.colors.white,
    },
    buttonImage: {
      //   borderWidth: 1,
      // width: 10,
    },
    buttonText: {
      color: SAD.colors.white,
      fontSize: fontSize || 16, // Use props for font size with a default value
      fontFamily: "Rubik-Medium",
    },
  });

export default SADTransParentButton;
