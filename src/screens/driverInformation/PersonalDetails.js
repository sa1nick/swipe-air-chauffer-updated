import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Pressable,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import styles from "./DriverInformationStyle";
import SAD from "../../SAD";
import SADTwoInputField from "../../components/SADTwoInputField";
import SADInputField from "../../components/SADInputField";
import SADContinueButton from "../../components/SADContinueButton";

const PersonalDetails = ({ navigateToComponent }) => {
  const [selectedGender, setSelectedGender] = useState(1);

  const continueButton = () => {
    navigateToComponent();
  };

  const DOBContainer = () => {
    return (
      <View style={styles.commonContainer}>
        <Text style={styles.commonTitleInputField}>How old are you?</Text>
        <View style={styles.dobSubContainer}>
          <Pressable style={styles.dobButton}>
            <Text style={styles.dobPlaceholder}>Choose Date of Birth</Text>
            <Image source={SAD.image.calenderIcon} />
          </Pressable>
          <View
            style={[
              styles.dobButton,
              { width: "25%", justifyContent: "center" },
            ]}
          >
            <Text style={styles.dob}>25 years</Text>
          </View>
        </View>
      </View>
    );
  };

  const GenderTypeContainer = () => {
    return (
      <View style={styles.commonContainer}>
        <Text style={styles.commonTitleInputField}>
          What would best describe you?
        </Text>
        <View style={styles.commonSubContainer}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
            onPress={() => {
              setSelectedGender(1);
            }}
          >
            <RadioButton index={1} />
            <Text>Male</Text>
          </Pressable>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
            onPress={() => {
              setSelectedGender(2);
            }}
          >
            <RadioButton index={2} />
            <Text>Female</Text>
          </Pressable>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
            onPress={() => {
              setSelectedGender(3);
            }}
          >
            <RadioButton index={3} />
            <Text>Others</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const RadioButton = (subProps) => {
    return (
      <View
        style={[
          styles.circle,
          {
            borderColor:
              subProps.index === selectedGender
                ? SAD.colors.purple
                : SAD.colors.greyAFAFAF,
          },
        ]}
      >
        {subProps.index === selectedGender ? (
          <View style={styles.dot}></View>
        ) : null}
      </View>
    );
  };

  return (
    <ScrollView style={{ width: SAD.constant.screenWidth }}>
      <Pressable style={styles.profileButton}>
        <ImageBackground
          style={styles.driverImage}
          source={SAD.image.driverDefault}
        >
          <Image source={SAD.image.cameraIcon} />
        </ImageBackground>
      </Pressable>
      <SADTwoInputField
        inputTitle={`What's your name?`}
        placeholderText1={"First"}
        placeholderText2={"Last"}
        keyboardType={"default"}
        secureTextEntry={false}
      />
      <SADInputField
        inputTitle={`Where shall we contact you?`}
        placeholderText={"Enter email address"}
        keyboardType={"email-address"}
        secureTextEntry={false}
        onChangeText={(value) => {
          emailRef.current.value = value;
        }}
      />
      <DOBContainer />
      <GenderTypeContainer />
      <SADContinueButton
        buttonTitle={"Continue"}
        buttonPressed={continueButton}
      />
    </ScrollView>
  );
};

export default PersonalDetails;
