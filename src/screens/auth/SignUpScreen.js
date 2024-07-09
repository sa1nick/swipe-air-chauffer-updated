import React, { useState, useRef } from "react";
import { View, ScrollView, Pressable, Text, Image } from "react-native";

import styles from "./SignUpStyle";
import SAD from "../../SAD";
import SADInputField from "../../components/SADInputField";
import SADGradientButton from "../../components/SADGradientButton";

import LinearGradient from "react-native-linear-gradient";

function SignUpScreen(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [termsSelected, setTermsSelected] = useState(false);

  const termsButtonPressed = () => {
    setTermsSelected(!termsSelected);
  };

  const signUpButton = () => {
    props.navigation.navigate("DriverInformation");
  };

  const mobileNumberButton = () => {
    props.navigation.navigate("MobileNumberScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#FFB785", "#fae7da", "#FFFFFF"]}
        locations={[0.1, 0.4, 0.5]}
        style={styles.bgGradient}
      ></LinearGradient>
      <Image
        style={styles.topLogo}
        source={SAD.image.registration1}
        resizeMode="contain"
      />
      <Text style={styles.signUpText}>Hey New user</Text>
      <Text style={styles.headingText}>
        Enter your email address to get registered
      </Text>
      <SADInputField
        inputRef={emailRef}
        placeholderText={"Enter email address"}
        keyboardType={"email-address"}
        secureTextEntry={false}
        onChangeText={(value) => {
          emailRef.current.value = value;
        }}
      />
      <Pressable style={styles.useMobileButton} onPress={mobileNumberButton}>
        <Text style={styles.useMobileText}>Use Mobile number Instead</Text>
      </Pressable>
      <SADInputField
        inputRef={emailRef}
        placeholderText={"Password"}
        secureTextEntry={true}
        onChangeText={(value) => {
          emailRef.current.value = value;
        }}
      />
      <SADInputField
        inputRef={emailRef}
        placeholderText={"Confirm Password"}
        secureTextEntry={true}
        onChangeText={(value) => {
          emailRef.current.value = value;
        }}
      />
      <Pressable style={styles.termsButton} onPress={termsButtonPressed}>
        {termsSelected ? (
          <Image source={SAD.image.tickSquare} />
        ) : (
          <View style={styles.uncheckView} />
        )}
        <Text style={styles.termsText}>I accept the policy and terms</Text>
      </Pressable>
      <SADGradientButton
        style={{ marginVertical: 25 }}
        buttonTitle={"Sign Up"}
        buttonPressed={signUpButton}
        image={SAD.image.multiple_forward_arrow}
      />
      <View style={styles.separatorContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orSignUpText}>Or Signup With</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.socialContainer}>
        <Pressable>
          <Image source={SAD.image.metaIcon} />
        </Pressable>
        <Pressable>
          <Image source={SAD.image.appleIcon} />
        </Pressable>
        <Pressable>
          <Image source={SAD.image.googleIcon} />
        </Pressable>
      </View>
      <Pressable style={styles.alreadyAccountButton}>
        <Text style={styles.alreadyAccountText}>
          Already Have an Account?{" "}
          <Text style={{ color: SAD.colors.orange }}>Login</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}

export default SignUpScreen;
