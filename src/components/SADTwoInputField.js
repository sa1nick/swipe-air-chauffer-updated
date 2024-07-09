import React from 'react';
import {TextInput, View, Platform, StyleSheet, Text} from 'react-native';

import SAD from '../SAD';
import CommonStyle from '../commonStyle/CommonStyle';

const SADTwoInputField = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleInputField}>{props.inputTitle}</Text>
      <View style={styles.subContainer}>
        <TextInput
          ref={props.inputRef}
          style={styles.inputField}
          placeholder={props.placeholderText1}
          placeholderTextColor={SAD.colors.grey8A8A8A}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKeyType}
          value={props.value}
          tintColor={SAD.colors.black}
          autoCapitalize="none"
        />
        <TextInput
          ref={props.inputRef}
          style={styles.inputField}
          placeholder={props.placeholderText2}
          placeholderTextColor={SAD.colors.grey8A8A8A}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKeyType}
          value={props.value}
          tintColor={SAD.colors.black}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 78,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  subContainer: {
    ...Platform.select({
      ios: {
        shadowColor: SAD.colors.grey7E7E7E,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
    height: 50,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputField: {
    ...CommonStyle.text14Regular,
    color: SAD.colors.black,
    width: '47%',
    height: '100%',
    backgroundColor: SAD.colors.white,
    borderRadius: 10,
    padding: 10,
  },
  titleInputField: {
    ...CommonStyle.text16Regular,
    marginLeft: 16,
  },
});

export default SADTwoInputField;
