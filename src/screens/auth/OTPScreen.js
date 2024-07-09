import React, { useState, useRef } from "react";
import { View, Pressable, Text, Image } from "react-native";

import { OtpInput } from "react-native-otp-entry";

import styles from "./OTPStyle";
import SAD from "../../SAD";
import SADInputField from "../../components/SADInputField";
import SADGradientButton from "../../components/SADGradientButton";
import LinearGradient from "react-native-linear-gradient";

function OTPScreen(props) {
  const editNumberButton = () => {
    props.navigation.goBack();
  };

  const sendAgainButton = () => {};

  const startEarningButton = () => {
    props.navigation.navigate("BottomTabBar");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFB785", "#fae7da", "#FFFFFF"]}
        locations={[0.1, 0.5, 0.6]}
        style={styles.bgGradient}
      ></LinearGradient>
      <Image style={styles.topLogo} source={SAD.image.mobileOtpRegistration} />
      <Text style={styles.headingText}>Enter the 6 Digit OTP</Text>
      <Text style={styles.subHeadingText}>
        Enter the six digit code we've sent to
      </Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>+1 - 454-222-0000</Text>
        <Pressable onPress={editNumberButton}>
          <Image source={SAD.image.editPencil} style={styles.editPencil} />
        </Pressable>
      </View>
      <OtpInput
        numberOfDigits={6}
        onTextChange={(text) => console.log(text)}
        focusColor={SAD.colors.purple}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
        }}
      />
      <View style={styles.editSendAgainContainer}>
        <Pressable onPress={sendAgainButton}>
          <Text style={styles.didntText}>
            Didn't receive OTP?
            <Text style={styles.sendAgain}>Send Again</Text>
          </Text>
        </Pressable>
      </View>
      <SADGradientButton
        style={{ marginVertical: 25 }}
        buttonTitle={"Start Earning"}
        buttonPressed={startEarningButton}
      />
    </View>
  );
}

export default OTPScreen;
