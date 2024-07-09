import React, {useEffect} from 'react';
import {StyleSheet, Platform, LogBox} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import {Provider} from 'react-redux';

import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
}

// LogBox.ignoreAllLogs();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
