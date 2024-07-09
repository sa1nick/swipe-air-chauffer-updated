import React, { useState } from "react";
import {
  TextInput,
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";

import SAD from "../SAD";
import CommonStyle from "../commonStyle/CommonStyle";

const SADInputField = (props) => {
  const [secure, setSecure] = useState(props.secureTextEntry);

  const toggleSecure = () => {
    setSecure(!secure);
  };

  return (
    <View
      style={[
        styles.container,
        {
          height: props.inputTitle ? 78 : 50,
          marginTop: 10,
        },
      ]}
    >
      {props.inputTitle ? (
        <Text
          style={[
            styles.titleInputField,
            { color: props.isUpdate ? SAD.colors.black : SAD.colors.white },
          ]}
        >
          {props.inputTitle}
        </Text>
      ) : null}
      <View style={styles.subContainer}>
        <TextInput
          ref={props.inputRef}
          style={styles.inputField}
          placeholder={props.placeholderText}
          placeholderTextColor={SAD.colors.black535353}
          keyboardType={props.keyboardType}
          secureTextEntry={secure}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKeyType}
          value={props.value}
          tintColor={SAD.colors.black}
          autoCapitalize="none"
        />
        {props.secureTextEntry && (
          <Pressable style={styles.eyeContainer} onPress={toggleSecure}>
            {secure ? (
              <Image source={SAD.image.eyeOff} />
            ) : (
              <Image source={SAD.image.eyeOn} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
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
    height: 50,
    paddingLeft: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: SAD.colors.white,
    paddingTop: 10,
  },
  inputField: {
    ...CommonStyle.text16Regular,
    color: SAD.colors.black535353,
    height: "100%",
  },
  titleInputField: {
    ...CommonStyle.text16Regular,
    marginLeft: 16,
  },
  eyeContainer: {
    position: "absolute",
    right: 20,
    height: "100%",
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
});

export default SADInputField;
