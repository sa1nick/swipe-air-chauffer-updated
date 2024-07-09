import React, { useState } from "react";
import {
  TextInput,
  View,
  Platform,
  StyleSheet,
  Pressable,
  Text,
  Image,
} from "react-native";

import CountryPicker from "react-native-country-picker-modal";

import SAD from "../SAD";
import CommonStyle from "../commonStyle/CommonStyle";

const SADMobileNumber = (props) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("US");
  const [country, setCountry] = useState({
    callingCode: ["1"],
    cca2: "US",
    currency: ["USD"],
    flag: "flag-us",
    name: "United States",
    region: "Americas",
    subregion: "North America",
  });

  const [withFlag, setWithFlag] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);

  const onSelect = (country) => {
    setCountry(country);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Pressable
          style={styles.countryContainer}
          onPress={() => setShow(true)}
        >
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withAlphaFilter,
              withCallingCode,
              onSelect,
            }}
            visible={show}
          />
          <Text style={styles.countryCode}>+{country?.callingCode[0]}</Text>
          <Image source={SAD.image.arrowDown} style={{ marginLeft: 7 }} />
        </Pressable>
        <View style={styles.separator} />
        <TextInput
          ref={props.inputRef}
          style={styles.inputField}
          placeholder={props.placeholderText}
          placeholderTextColor={SAD.colors.black}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKeyType}
          value={props.value}
          selectionColor={SAD.colors.black}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    marginTop: 10,
  },
  subContainer: {
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
    paddingLeft: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },
  countryContainer: {
    width: 65,
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryCode: {
    ...CommonStyle.text14Regular,
    color: SAD.colors.black,
  },
  inputField: {
    color: SAD.colors.black,
    fontSize: 16,
    fontFamily: "Rubik-Medium",
    height: "100%",
    width: 200,
    marginLeft: 10,
  },
  separator: {
    width: 1,
    height: "100%",
    marginLeft: 15,
    backgroundColor: "#7E7E7E29",
  },
});

export default SADMobileNumber;
