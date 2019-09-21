import React, { Component } from "react";
import HomeScreen  from "./HomeScreen.js";
import { Dimensions } from 'react-native';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const height = Dimensions.get('window').height;
export default class SplashPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Image style={styles.image} source={require("../assets/images/FinalLogoV.png")}/>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.loginBtnContainer}>Ingrese una reseña</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.enterContainer}>Entrar ⦿</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
  loginBtnContainer: {
    color: "#439bd5",
    borderColor: '#439bd5',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 100,
  },
  enterContainer: {
    color: "white",
    fontSize: 24,
    borderColor: '#439bd5',
    backgroundColor: "#439bd5",
    borderWidth: 1,
    borderRadius: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 10,
  }
})
