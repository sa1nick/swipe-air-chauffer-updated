import React, { useState, useRef } from "react";
import { View, Pressable, Text, Image } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import styles from "./MobileNumberStyle";
import SAD from "../../SAD";
import SADMobileNumber from "../../components/SADMobileNumber";
import SADGradientButton from "../../components/SADGradientButton";
import LinearGradient from "react-native-linear-gradient";

function MobileNumberScreen(props) {
  const numberRef = useRef(null);

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  const dispatch = useDispatch();

  const otpButton = () => {
    console.log("otpButton");
    // dispatch(signUpWithNumber({number: '9998887776'}));
    props.navigation.navigate("OTPScreen");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFB785", "#fae7da", "#FFFFFF"]}
        locations={[0.1, 0.5, 0.6]}
        style={styles.bgGradient}
      ></LinearGradient>
      <Image style={styles.topLogo} source={SAD.image.mobileRegistration} />
      <Text style={styles.headingText}>Enter Phone Number</Text>
      <Text style={styles.subHeadingText}>
        We'll text a code to verify your phone
      </Text>
      <SADMobileNumber
        inputRef={numberRef}
        placeholderText={"Enter mobile number"}
        keyboardType={"number-pad"}
        secureTextEntry={false}
        onChangeText={(value) => {
          numberRef.current.value = value;
        }}
      />

      <View style={styles.termsTextContainer}>
        <Pressable>
          <Text style={([{ color: SAD.colors.purple }], styles.termsText)}>
            By Continuing, you agree to
          </Text>
        </Pressable>
        <Text
          style={[{ color: SAD.colors.purple, fontFamily: "Rubik-Medium" }]}
        >
          Terms of Service & Privacy Policy
        </Text>
      </View>

      <SADGradientButton
        style={{ marginVertical: 25 }}
        buttonTitle={"Get OTP"}
        buttonPressed={otpButton}
      />
    </View>
  );
}

export default MobileNumberScreen;
