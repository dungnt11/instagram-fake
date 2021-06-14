import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default () => {
  let [fontsLoaded] = useFonts({
    "lobster_regular": require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
    "Roboto": require("./assets/fonts/Roboto/Roboto-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
};
