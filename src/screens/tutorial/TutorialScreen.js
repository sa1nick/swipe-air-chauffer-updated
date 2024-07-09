import React, { useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Pressable,
  Text,
  Image,
} from "react-native";
import { PageControlAji } from "react-native-chi-page-control";

import styles from "./TutorialStyle";
import SAD from "../../SAD";
import TutorialCell from "../../flatListCells/TutorialCell";

function TutorialScreen(props) {
  const [progress, setProgress] = useState(0);

  const tutorialData = [
    {
      tutorialImage: SAD.image.welcome1,
      heading: "Faster Onboarding Process",
      subHeading:
        "Earn money by delivering goods, courier and packages. Get a part time or full time delivery job.",
    },
    {
      tutorialImage: SAD.image.welcome2,
      heading: "Ride & Earn more with Swipe Air",
      subHeading:
        "Earn money by delivering goods, courier and packages. Get a part time or full time delivery job.",
    },
    {
      tutorialImage: SAD.image.tutorial3,
      heading: "Weekly Payouts",
      subHeading:
        "Earn money by delivering goods, courier and packages. Get a part time or full time delivery job.",
    },
    {
      tutorialImage: SAD.image.tutorial4,
      heading: "Flexible Working Hours",
      subHeading:
        "Earn money by delivering goods, courier and packages. Get a part time or full time delivery job.",
    },
    {
      tutorialImage: SAD.image.tutorial5,
      heading: "Attractive Incentives",
      subHeading:
        "Earn money by delivering goods, courier and packages. Get a part time or full time delivery job.",
    },
  ];

  const renderTutorial = ({ item, index }) => {
    return <TutorialCell item={item} index={index} />;
  };

  onScroll = (e) => {
    // Get progress by dividing current FlatList X offset with full FlatList width
    setProgress(
      e.nativeEvent.contentOffset.x /
        ((tutorialData.length - 1) * SAD.constant.screenWidth)
    );
  };

  const skipButtonPressed = () => {
    props.navigation.navigate("SignUpScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tutorialData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderTutorial}
        keyExtractor={(item) => item.tutorialImage}
        onScroll={onScroll}
      />
      <View style={styles.indicatorContainer}>
        <Pressable style={styles.skipButton} onPress={skipButtonPressed}>
          <Text style={styles.skipText}>SKIP</Text>
          <Image source={SAD.image.forwardArrow} />
        </Pressable>
        <PageControlAji
          progress={progress}
          numberOfPages={tutorialData.length}
          activeTintColor={SAD.colors.orange}
          inactiveTintColor={SAD.colors.grey8A8A8A}
          radius={4}
        />
      </View>
    </SafeAreaView>
  );
}

export default TutorialScreen;
