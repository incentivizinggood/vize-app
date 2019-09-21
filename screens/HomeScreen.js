import * as WebBrowser from 'expo-web-browser';
import React from 'react';

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

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      enter: '',
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text style={styles.textContainer}> Incentivar Buena </Text>
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
  textMenu: {
    color: "#000",
    fontSize: 20,
    marginBottom:25,
    backgroundColor: '#FFF',
  },
  textContainer: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInput: {
    alignItems: "center",
    color: "#FFF",
    height: 50,
    fontSize: 25,
    borderRadius: 12,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    marginBottom: 10,
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
