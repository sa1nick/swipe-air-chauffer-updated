import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  Pressable,
  Text,
  Image,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import styles from "./HomeStyle";
import SAD from "../../../SAD";
import BSEmergencyContactUpdate from "../../../components/BSEmergencyContactUpdate";
import { PageControlAji } from "react-native-chi-page-control";
import BannerCell from "../../../flatListCells/BannerCell";
import DriverDetails from "../../../components/DriverDetails";

function HomeScreen() {
  const [showBS, setShowBS] = useState(false);
  const [progress, setProgress] = useState(0);

  const tutorialData = [
    {
      id: 1,
      tutorialImage: SAD.image.tutorial5,
      heading: "Attractive Incentives",
      subHeading: "Earn money by delivering goods, courier and packages.",
    },
    {
      id: 0,
      tutorialImage: SAD.image.banner2,
      heading: "Ride & Earn more with Swipe Air",
      subHeading: "Earn money by delivering goods, courier and packages.",
    },

    {
      id: 2,
      tutorialImage: SAD.image.tutorial3,
      heading: "Weekly Payouts",
      subHeading: "Earn money by delivering goods, courier and packages.",
    },
  ];

  const renderTutorial = ({ item, index }) => {
    return <BannerCell item={item} index={index} />;
  };

  onScroll = (e) => {
    // Get progress by dividing current FlatList X offset with full FlatList width
    setProgress(
      e.nativeEvent.contentOffset.x /
        ((tutorialData.length - 1) * SAD.constant.screenWidth)
    );
  };

  const closeModalButton = () => {
    setShowBS(false);
  };

  const data = [{ key: "content" }];

  return (
    <FlatList
      data={data}
      renderItem={() => (
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showBS}
            onRequestClose={closeModalButton}
          >
            <BSEmergencyContactUpdate close={closeModalButton} />
          </Modal>
          <LinearGradient
            colors={SAD.colors.buttonPurpleGradient}
            style={styles.gradientBg}
          />
          <SafeAreaView>
            <Image style={{ marginLeft: 16 }} source={SAD.image.swipeAirLogo} />
            <View style={styles.bottomContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                  marginHorizontal: 16,
                }}
              >
                <View>
                  <Text style={styles.welcomeText}>Welcome to</Text>
                  <Text style={styles.welcomeText}>Swipe Air Delivery !</Text>
                </View>
                {/* <Pressable onPress={() => setShowBS(true)}>
                  <Image
                    style={{ width: 157, height: 57 }}
                    source={SAD.image.buttonEarning}
                  />
                </Pressable>
              </View> */}

                <Pressable
                  onPress={() => setShowBS(true)}
                  style={styles.startEarningButton}
                >
                  <Image source={SAD.image.timer_time_second_minute} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.startEarningText}>
                      START EARNING IN
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Rubik-Bold",
                        color: SAD.colors.white,
                        marginTop: -5,
                      }}
                    >
                      10 MINS
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <FlatList
                  data={tutorialData}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderTutorial}
                  keyExtractor={(item) => item.bannerImage}
                  onScroll={onScroll}
                  key={(item) => item.id}
                />
                <View style={{ alignItems: "center" }}>
                  <PageControlAji
                    progress={progress}
                    numberOfPages={tutorialData.length}
                    activeTintColor={SAD.colors.purple}
                    inactiveTintColor={SAD.colors.grey8A8A8A}
                    // animationDuration={50}
                    radius={3}
                    margin={15}
                  />
                </View>
                <DriverDetails topHeading={"PROFILE UNDER REVIEW"} />
              </View>
            </View>
          </SafeAreaView>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default HomeScreen;
