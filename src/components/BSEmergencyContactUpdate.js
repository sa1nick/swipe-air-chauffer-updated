import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import SAD from '../SAD';
import CommonStyle from '../commonStyle/CommonStyle';
import EmergencyContactForm from '../screens/driverInformation/EmergencyContactForm';

const BSEmergencyContactUpdate = props => {
  return (
    <View style={styles.container}>
      <View style={styles.blackContainer}></View>
      <Pressable style={styles.crossIcon} onPress={props.close}>
        <Image source={SAD.image.crossIcon} />
      </Pressable>
      <Image style={styles.icon} source={SAD.image.emergencyContactIcon} />
      <LinearGradient
        colors={SAD.colors.orangeWarmGradient}
        style={styles.bottomContainer}>
        <Text style={styles.title}>Emergency Contact</Text>
        <EmergencyContactForm isUpdate={true} />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
          <Pressable style={[styles.button, {borderColor: SAD.colors.orange}]}>
          <Text style={[styles.buttonText, {color: SAD.colors.orange}]}>Update</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blackContainer: {
    width: SAD.constant.screenWidth,
    height: SAD.constant.screenHeight,
    position: 'absolute',
    backgroundColor: SAD.colors.black,
    opacity: 0.6,
  },
  bottomContainer: {
    width: SAD.constant.screenWidth,
    height: 600,
    alignItems: 'center',
    marginTop: -35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  crossIcon: {
    alignSelf: 'flex-end',
    marginRight: 18,
  },
  icon: {
    width: 70,
    height: 70,
    zIndex: 1,
    alignSelf: 'center',
  },
  title: {
    ...CommonStyle.text18Medium,
    marginTop: 46,
  },
  buttonContainer: {
    width: 210,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  button: {
    width: 98,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: SAD.colors.grey8A8A8A,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    ...CommonStyle.text16Medium,
    color: SAD.colors.grey8A8A8A
  }
});

export default BSEmergencyContactUpdate;
