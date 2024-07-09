import React from "react";
import { Image, Text, StyleSheet, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SAD from "../SAD";

const SADGradientButton = (props) => {
  // Generate styles dynamically based on props
  const styles = createStyles(props);

  return (
    <Pressable onPress={props.buttonPressed}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={SAD.colors.buttonPurpleGradient}
        style={[styles.button, props.style]}
      >
        <Text style={styles.buttonText}>{props.buttonTitle}</Text>
        {props.image ? (
          <Image style={styles.buttonImage} source={props.image} />
        ) : null}
      </LinearGradient>
    </Pressable>
  );
};

const createStyles = (props) =>
  StyleSheet.create({
    button: {
      width: props.width || 139,
      height: props.height || 40,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      alignSelf: "center",
      flexDirection: "row",
    },
    buttonImage: {
      borderWidth: 1,
      // width: 10,
    },
    buttonText: {
      color: SAD.colors.white,
      fontSize: props.fontSize || 16, // Use props for font size with a default value
      fontFamily: "Rubik-Medium",
    },
  });

export default SADGradientButton;
