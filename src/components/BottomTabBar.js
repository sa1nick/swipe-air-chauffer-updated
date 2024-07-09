import { Image, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SAD from "../SAD";
import HomeScreen from "../screens/bottomTab/home/HomeScreen";
import OrdersScreen from "../screens/bottomTab/orders/OrdersScreen";
import PaymentScreen from "../screens/bottomTab/payment/PaymentScreen";
import CoinsScreen from "../screens/bottomTab/coins/CoinsScreen";
import LandingPage from "../screens/bottomTab/home/LandingPage";

const Tab = createBottomTabNavigator();

function BottomTabBar(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? SAD.image.homeSelectedTab
              : SAD.image.homeSelectedTab;
          } else if (route.name === "Orders") {
            iconName = focused ? SAD.image.orderTab : SAD.image.orderTab;
          } else if (route.name === "Payment") {
            iconName = focused ? SAD.image.paymentTab : SAD.image.paymentTab;
          } else if (route.name === "Coins") {
            iconName = focused ? SAD.image.coinTab : SAD.image.coinTab;
          }

          // You can return any component that you like here!
          return <Image source={iconName} />;
        },
        tabBarActiveTintColor: SAD.colors.black,
        tabBarInactiveTintColor: SAD.colors.grey8A8A8A,
        tabBarStyle: styles.tabBarStyle,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Coins" component={CoinsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarLabel: {
    fontSize: 16,
  },
  tabBarStyle: {
    backgroundColor: "white", // Set the background color of the tab bar
    ...Platform.select({
      ios: {
        shadowColor: "#E5E5E5",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});

export default BottomTabBar;
