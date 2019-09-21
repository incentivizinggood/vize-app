import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from "../screens/LoginScreen.js";
import SplashPage from "../screens/SplashScreen.js"
import SignUpScreen from "../screens/SignUpScreen.js";
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    Splash: SplashPage,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
