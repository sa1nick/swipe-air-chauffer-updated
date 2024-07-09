import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Pressable,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";

import SAD from "../../SAD";
import SADInputField from "../../components/SADInputField";
import CommonStyle from "../../commonStyle/CommonStyle";
import QueryText from "../../components/QueryText";
import SADContinueButton from "../../components/SADContinueButton";
import SADFloatingLabelInput from "../../components/SADFloatingLabelInput";

const EmergencyContactForm = (props) => {
  return (
    <View style={styles.container}>
      <QueryText query={"Where shall we contact you?"} />
      <Text style={styles.heading}>Contact 1</Text>
      <SADFloatingLabelInput
        placeholderText={"Emergency Contact Name"}
        keyboardType={"default"}
        secureTextEntry={false}
        icon={SAD.image.addUserIcon}
      />

      <SADFloatingLabelInput
        placeholderText={"Contact Number"}
        keyboardType={"numeric"}
      />
      <Text style={[styles.heading]}>Contact 2</Text>
      <SADFloatingLabelInput
        placeholderText={"Emergency Contact Name"}
        keyboardType={"default"}
        secureTextEntry={false}
        icon={SAD.image.addUserIcon}
      />

      <SADFloatingLabelInput
        placeholderText={"Contact Number"}
        keyboardType={"numeric"}
      />
      <SADContinueButton buttonTitle={"Continue"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SAD.constant.screenWidth,
  },
  heading: {
    // ...CommonStyle.text16Medium,
    color: SAD.colors.white,
    fontSize: 16,
    fontFamily: "Rubik-Regular",
    marginLeft: 16,
    marginTop: 25,
  },
});

export default EmergencyContactForm;
