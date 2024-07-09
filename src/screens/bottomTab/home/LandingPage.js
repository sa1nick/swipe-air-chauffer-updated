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

import styles from "./LandingPageStyle";
import SAD from "../../../SAD";
import EarningBox from "../../../components/EarningBox";
import SwiperAirGoCard from "../../../components/SwipeAirGoCard";
import DailyMileStoneCard from "../../../components/SADDailyMileStoneCard";
import SADDailyMileStoneCard from "../../../components/SADDailyMileStoneCard";

function LandingPage() {
  const data = [{ key: "content" }];

  return (
    <FlatList
      data={data}
      renderItem={() => (
        <View style={styles.container}>
          <LinearGradient
            colors={SAD.colors.buttonPurpleGradient}
            style={styles.purpleGradientBg}
          />
          <SafeAreaView>
            <View style={styles.topContainer}>
              <View>
                <LinearGradient
                  colors={["#FFB785", "#FFFFFF"]}
                  style={styles.orangeGradientBg}
                >
                  <Image
                    source={SAD.image.user_orange_icon}
                    style={styles.userIcon}
                  />
                  <Text
                    style={{
                      color: SAD.colors.purple,
                      fontFamily: "Rubik-SemiBold",
                    }}
                  >
                    4.5
                  </Text>
                  <Image
                    source={SAD.image.star_icon}
                    style={{ height: 11, width: 11 }}
                  />
                </LinearGradient>
                <Image
                  source={SAD.image.gold_coin_icon}
                  style={styles.goldCoinIcon}
                ></Image>
              </View>
              <Image source={SAD.image.swipeAirLogo} />
              <View>
                <Image source={SAD.image.bell_icon} />
                <View style={styles.bellNotification}></View>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <LinearGradient
                colors={SAD.colors.orangeWarmGradient2}
                style={styles.earningContainerBg}
              >
                <View style={styles.earningContainer}>
                  <EarningBox
                    icon={SAD.image.purple_order_circle}
                    heading={"Orders"}
                    amount={12}
                  />
                  <View
                    style={{
                      height: 44,
                      borderRightWidth: 1,
                      borderRightColor: SAD.colors.white,
                    }}
                  ></View>
                  <EarningBox
                    icon={SAD.image.purple_dollar_circle}
                    heading={"Earnings"}
                    amount={"$345"}
                  />
                  <View
                    style={{
                      height: 44,
                      borderRightWidth: 1,
                      borderRightColor: SAD.colors.white,
                    }}
                  ></View>
                  <EarningBox
                    icon={SAD.image.purple_coin_circle}
                    heading={"Coins"}
                    amount={80}
                  />
                </View>
              </LinearGradient>
              <View>
                <SADDailyMileStoneCard />
                <SwiperAirGoCard
                  heading={"Try Swipe Air Go"}
                  //   data={subHeadingData}
                />
              </View>
            </View>
          </SafeAreaView>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default LandingPage;
