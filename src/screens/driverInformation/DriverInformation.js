import React, { useState } from "react";
import { View, SafeAreaView, Pressable, Text, Image } from "react-native";

import LinearGradient from "react-native-linear-gradient";

import styles from "./DriverInformationStyle";
import SAD from "../../SAD";
import PersonalDetails from "./PersonalDetails";
import EmergencyContactForm from "./EmergencyContactForm";

function DriverInformation(props) {
  const [currentComponent, setCurrentComponent] = useState("PersonalDetails");
  const NavigationBar = () => {
    return (
      <View style={styles.navigationStyle}>
        <Pressable
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        >
          <Image source={SAD.image.backArrow} />
        </Pressable>
        <Text style={styles.title}>Personal Details</Text>
      </View>
    );
  };

  const ProgessContainer = (subProp) => {
    return (
      <View style={styles.progessContainer}>
        <SubProgessContainer index={1} title={"PERSONAL DETAILS"} />
        <SubProgessContainer index={2} title={"WORK DETAILS"} />
        <SubProgessContainer index={3} title={"VEHICLE & ID CARD"} />
      </View>
    );
  };

  const SubProgessContainer = (subProp) => {
    return (
      <View style={styles.subProgessContainer}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image source={SAD.image.checkCircleGrey} />
          <Text style={styles.subProgressTitle}>{subProp.title}</Text>
        </View>
        <View
          style={[
            styles.progress,
            {
              borderTopLeftRadius: subProp.index === 1 ? 10 : 0,
              borderBottomLeftRadius: subProp.index === 1 ? 10 : 0,
              borderTopRightRadius: subProp.index === 3 ? 10 : 0,
              borderBottomRightRadius: subProp.index === 3 ? 10 : 0,
            },
          ]}
        ></View>
      </View>
    );
  };

  const RenderComponent = () => {
    switch (currentComponent) {
      case "PersonalDetails":
        return (
          <PersonalDetails
            navigateToComponent={() =>
              setCurrentComponent("EmergencyContactForm")
            }
          />
        );
      case "EmergencyContactForm":
        return <EmergencyContactForm />;
      default:
        return (
          <PersonalDetails
            navigateToComponent={() =>
              setCurrentComponent("EmergencyContactForm")
            }
          />
        );
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={SAD.colors.detailBgGradient}
    >
      <SafeAreaView>
        <NavigationBar />
        <ProgessContainer />
        <RenderComponent />
      </SafeAreaView>
    </LinearGradient>
  );
}

export default DriverInformation;
