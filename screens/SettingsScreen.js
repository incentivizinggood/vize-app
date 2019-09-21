import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import * as firebase from 'firebase';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      enter: '',
    };
  }
  
  
  registerButton = () => {
    Alert.alert("Thank you! Please check your email for further details.")
  }

  render() {
    console.log("Alignment1: " + this.state.enter)
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text style={styles.textContainer}> Configuraciones </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#439bd5',
    alignItems: "center",
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: "center",
    justifyContent: 'center',
    flex: 0.8,
  },
  textContainer: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: 'bold',
  },
  textContainers: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 10,
  },
  textInput: {
    alignItems: "center",
    color: "#FFF",
    height: 50,
    fontSize: 25,
    borderRadius: 12,
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textContainerEvent: {
    color: "#FFF",
    marginBottom: 20,
    fontSize: 25,
  },
  finishContainer: {
    alignItems: "center",
    color: "#FFF",
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15,
  },
});
